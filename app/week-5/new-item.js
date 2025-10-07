'use client';
import { useState } from 'react';

const New_Item = ({quantity: initialQuantity}) => {
    const [quantity, setQuantity] = useState(initialQuantity || 1);

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
    return (
        <div className="border p-4 mb-4 rounded shadow bg-gradient-to-r from-black-100 to-gray-800">
            <p>Quantity: {quantity}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                onClick={increment}
                disabled={quantity >= 20}
            >
                Quantity + 1
            </button>
            <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={decrement}
                disabled={quantity <= 1}
            >
                Quantity - 1
            </button>
        </div>
    );
};

export default New_Item;