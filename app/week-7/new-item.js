'use client';
import { useState } from 'react';

const New_Item = ({ quantity: initialQuantity, name: initialName, category: initialCategory }) => {
    const [quantity, setQuantity] = useState(initialQuantity || 1);
    const [name, setName] = useState(initialName || "");
    const [category, setCategory] = useState(initialCategory || "produce");
    const [items, setItems] = useState([]); 

    const increment = () => {
        if (quantity < 20) {
            console.log("Incrementing quantity:", quantity + 1);
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            console.log("Decrementing quantity:", quantity - 1);
            setQuantity(quantity - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = { name, quantity, category };
        setItems([...items, newItem]);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="border p-4 mb-4 rounded shadow bg-gradient-to-r from-black-100 to-gray-800 capitalize text-white">
            <form onSubmit={handleSubmit} className="mb-6">
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
                        className="w-full p-2 rounded border border-gray-300 bg-transparent text-white"
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
                        className="w-full p-2 rounded border bg-transparent text-white"
                    >
                            <option value="produce" className="bg-black text-white">Produce</option>
                            <option value="dairy" className="bg-black text-white">Dairy</option>
                            <option value="bakery" className="bg-black text-white">Bakery</option>
                            <option value="meat" className="bg-black text-white">Meat</option>
                            <option value="frozen foods" className="bg-black text-white">Frozen Foods</option>
                            <option value="canned goods" className="bg-black text-white">Canned Goods</option>
                            <option value="dry goods" className="bg-black text-white">Dry Goods</option>
                            <option value="beverages" className="bg-black text-white">Beverages</option>
                            <option value="snacks" className="bg-black text-white">Snacks</option>
                            <option value="household" className="bg-black text-white">Household</option>
                            <option value="other" className="bg-black text-white">Other</option>
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
                    className="bg-black text-white px-4 py-2 rounded font-bold hover:bg-blue-600 border border-white"
                >
                    Submit
                </button>
            </form>

            <div>
                <h2 className="text-white text-xl font-bold mb-4">Submitted Items:</h2>
                <ul className="border p-4 mb-4 rounded shadow bg-gradient-to-r from-black-100 to-gray-800 capitalize text-white">
                    {items.map((item, index) => (
                        <li key={index}>
                            <p>{"Item Name: " + item.name}</p>
                            <p>{"Category: " + item.category}</p>
                            <p>{"Quantity: " + item.quantity}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default New_Item;