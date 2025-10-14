import Item from './item';
import { useState } from 'react';
import './items.json';

const ItemList = () => {
    var sortBy = useState(setSortBy || 'name');
    var items = useState(require('./items.json'));
    return (
        <ul>
        {items.map(() => (
            <Item 
                key= {items.id}
                name= {items.name}
                quantity= {items.quantity}
                category= {items.category}
            />
        ))}
        </ul>
    );
};

export default ItemList;