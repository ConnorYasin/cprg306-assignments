import React from 'react';
import Item from './item';
import ItemList from './item-list';

const Page = () => {
    return (
        <main>
            <h1 className='font-bold text-5xl m-5'>Shopping List</h1>
            <ItemList />
        </main>
    );
};

export default Page;