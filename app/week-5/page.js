import New_Item from "./new-item.js";

const Page = () => {
    return (
        <main>
            <header>
            <h1 className='font-bold text-5xl m-5'>New Item Creator</h1>
            </header>
            <New_Item />
        </main>
    );
};

export default Page;