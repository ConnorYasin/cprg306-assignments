const Item = ({name, quantity, category}) => {
  return (
  <li className="item">
    <div>
        <h3>{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
    </div>
  </li>
  );
};

export default Item;