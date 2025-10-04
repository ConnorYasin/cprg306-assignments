'use client';
import { useState } from 'react';

const New_Item = ({quantity: initialQuantity}) => {
    const [quantity, setQuantity] = useState(initialQuantity || 1);

    return (
        <div className="border p-4 mb-4 rounded shadow bg-gradient-to-r from-black-100 to-gray-800">
            <h3>New Item</h3>
            <p>Quantity: {quantity}</p>
            <p>Category: </p>
        </div>
    );
};

export default New_Item;