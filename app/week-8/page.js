"use client";
import { useState } from "react";
import ItemList from "./item-list";
import New_Item from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // add a new item; assigns a unique numeric id and appends to state
  const handleAddItem = (newItem) => {
    setItems((prev) => {
      // collect only finite numeric ids
      const ids = prev.map(i => Number(i?.id)).filter(Number.isFinite);
      const maxId = ids.length ? Math.max(...ids) : 0;
      const nextId = maxId + 1;
      return [...prev, { id: nextId, ...newItem }];
    });
  };

  // called when an Item is selected; produces a single lowercase word
  const handleItemSelect = (item) => {
    if (!item || !item.name) {
      console.log('handleItemSelect -> no name, clearing selectedItemName');
      setSelectedItemName("");
      return;
    }

    const raw = String(item.name);
    console.log('handleItemSelect -> raw name:', raw);

    // take text before first comma, then first token (word)
    const beforeComma = raw.split(",")[0].trim();
    const firstToken = (beforeComma.split(/\s+/)[0] || "").trim();

    // remove anything that's not an ASCII letter, then lowercase
    const cleaned = firstToken.replace(/[^a-zA-Z]/g, "").toLowerCase();

    console.log('handleItemSelect -> cleaned ingredient:', cleaned);

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

export default Page;