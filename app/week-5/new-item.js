'use client';
import { useState } from 'react';

const New_Item = ({ quantity: initialQuantity, name: initialName, category: initialCategory }) => {
    const [quantity, setQuantity] = useState(initialQuantity || 1);
    const [name, setName] = useState(initialName || "");
    const [category, setCategory] = useState(initialCategory || "produce");

    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1);
        };
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Item Submitted:");
        console.log("Name:", name);
        console.log("Quantity:", quantity);
        console.log("Category:", category);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="border p-4 mb-4 rounded shadow bg-gradient-to-r from-black-100 to-gray-800 capitalize text-white"
        >
            <div className="mb-4">
                <label htmlFor="item-name" className="block text-white text-lg font-bold mb-2">
                    Item Name:
                </label>
                <input
                    id="item-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 rounded border border-gray-300 text-black"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="category" className="block text-white text-lg font-bold mb-2">
                    Category:
                </label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 rounded border border-gray-300 text-black"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="flex items-center space-x-4 mb-4">
                <button
                    type="button"
                    className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border border-white"
                    onClick={decrement}
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <p className="text-white text-lg font-bold">Quantity: {quantity}</p>
                <button
                    type="button"
                    className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border border-white"
                    onClick={increment}
                    disabled={quantity >= 20}
                >
                    +
                </button>
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded font-bold hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
};

export default New_Item;