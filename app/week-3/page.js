import React from 'react';
import Item from './item';
import ItemList from './item-list';

const Page = () => {
    return (
        <main>
            <h1>Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;