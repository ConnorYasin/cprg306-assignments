const Item = ({name, quantity, category}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
    </div>
  );
};

export default Item;