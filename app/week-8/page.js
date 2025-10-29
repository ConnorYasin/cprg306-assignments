"use client";
import { useState } from "react";
import ItemList from "./item-list";
import New_Item from "./new-item";
import itemsData from "./items.json";

const Page = () => {
  const [items, setItems] = useState(itemsData);

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

  return (
    <main>
      <h1 className="font-bold text-5xl m-5">Shopping List</h1>
      <New_Item onAddItem={handleAddItem} />
      <ItemList items={items} setItems={setItems} />
    </main>
  );
};

export default Page;