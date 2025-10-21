const Item = ({name, quantity, category}) => {
  return (
    <div className="border p-4 mb-4 rounded shadow bg-gradient-to-r from-black-100 to-gray-800">
        <h3 className="capitalize">{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
    </div>
  );
};

export default Item;