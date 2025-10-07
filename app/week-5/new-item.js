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
            <div className="flex items-center space-x-4">
                <button
                    className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                    onClick={decrement}
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <p className="text-white text-lg font-bold">Quantity: {quantity}</p>
                <button
                    className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                    onClick={increment}
                    disabled={quantity >= 20}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default New_Item;