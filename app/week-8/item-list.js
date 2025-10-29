"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items = [], onItemSelect }) => {
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
                    <li
                        key={item.id}
                        className="mb-2 cursor-pointer"
                        onClick={() => {
                            console.log('Item clicked (List):', item);
                            if (typeof onItemSelect === 'function') onItemSelect(item);
                        }}
                    >
                        <Item
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                            onSelect={() => {
                                console.log('Item clicked (Component onSelect):', item);
                                if (typeof onItemSelect === 'function') onItemSelect(item);
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;