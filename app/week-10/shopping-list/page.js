"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useUserAuth } from "../../contexts/AuthContext";
import ItemList from "./item-list";
import New_Item from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user, gitHubSignIn } = useUserAuth();

  // Always call hooks in the same order
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Load items for the current user
  const loadItems = async () => {
    if (!user) return;
    try {
      const list = await getItems(user.uid);
      setItems(list || []);
    } catch (err) {
      console.error("Load items failed:", err);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  // If no user, do not render the shopping list page.
  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black p-6">
        <section className="max-w-md w-full border p-4 mb-4 rounded shadow bg-gradient-to-r from-black-100 to-gray-800 capitalize text-white backdrop-blur text-center">
          <h1 className="text-2xl font-semibold mb-3 normal-case">Access denied</h1>
          <p className="text-sm text-gray-300 mb-6 normal-case">
            You must be signed in to view the shopping list.
          </p>

          <div className="flex gap-3">
            <Link
              href="/week-10"
              className="flex-1 inline-flex items-center justify-center bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-600 border border-white"
            >
              Back to Login Page
            </Link>
          </div>
        </section>
      </main>
    );
  }

  // add a new item; persist to Firestore and update local state
  const handleAddItem = async (newItem) => {
    try {
      const id = await addItem(user.uid, newItem);
      setItems((prev) => [...prev, { id, ...newItem }]);
    } catch (err) {
      console.error("Add item failed:", err);
      // fallback: add locally with generated numeric id
      setItems((prev) => {
        const ids = prev.map((i) => Number(i?.id)).filter(Number.isFinite);
        const maxId = ids.length ? Math.max(...ids) : 0;
        const nextId = maxId + 1;
        return [...prev, { id: nextId, ...newItem }];
      });
    }
  };

  // called when an Item is selected; produces a single lowercase word
  const handleItemSelect = (item) => {
    if (!item || !item.name) {
      console.log("handleItemSelect -> no name, clearing selectedItemName");
      setSelectedItemName("");
      return;
    }

    const raw = String(item.name);
    console.log("handleItemSelect -> raw name:", raw);

    // take text before first comma, then first token (word)
    const beforeComma = raw.split(",")[0].trim();
    const firstToken = (beforeComma.split(/\s+/)[0] || "").trim();

    // remove anything that's not an ASCII letter, then lowercase
    const cleaned = firstToken.replace(/[^a-zA-Z]/g, "").toLowerCase();

    console.log("handleItemSelect -> cleaned ingredient:", cleaned);

    setSelectedItemName(cleaned);
  };

  return (
    <main>
      <h1 className="font-bold text-5xl m-5">Shopping List</h1>

      <div className="flex gap-6">
        <div className="w-1/2">
          <New_Item onAddItem={handleAddItem} />
          <ItemList items={items} setItems={setItems} onItemSelect={handleItemSelect} />
        </div>

        <div className="w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
};