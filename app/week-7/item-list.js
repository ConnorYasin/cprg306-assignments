"use client";

import Item from './item';
import { useState } from 'react';

const ItemList = ({ items = [] }) => {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });

    const handleSortChange = (value) => {
        setSortBy(value);
    };

    return (
        <div>
            <div className="mb-4">
                <button
                    onClick={() => handleSortChange('name')}
                    className={`px-4 py-2 mr-2 rounded font-bold border border-white ${
                        sortBy === 'name'
                            ? 'bg-gray-600 text-white hover:bg-gray-700'
                            : 'bg-black text-white hover:bg-gray-600'
                    }`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => handleSortChange('category')}
                    className={`px-4 py-2 rounded font-bold border border-white ${
                        sortBy === 'category'
                            ? 'bg-gray-600 text-white hover:bg-gray-700'
                            : 'bg-black text-white hover:bg-gray-600'
                    }`}
                >
                    Sort by Category
                </button>
            </div>

            <ul className="capitalize list-none p-0">
                {sortedItems.map((item) => (
                    <Item 
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;