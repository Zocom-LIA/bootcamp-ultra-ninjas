import "./style.scss";

interface CartItemProps {
  title: string;
  price: number;
  id: number;
  quantity: number;
  itemIncrease: (id: number) => void;
  itemDecrease: (id: number) => void;
}

export const CartItem = ({ title, price, id, quantity, itemIncrease, itemDecrease }: CartItemProps) => {
  const handleIncrease = () => {
    itemIncrease(id);
  };

  const handleDecrease = () => {
    itemDecrease(id);
  };

  const totalPrice = price * quantity;

  return (
    <li className="cart-item">
      <article className="cart-item__details">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__divider"></p>
        <p className="cart-item__price">{totalPrice} SEK</p>
      </article>

      <article className="cart-item__amount">
        <button className="cart-item__btn cart-item__btn--add" onClick={handleIncrease}>
          +
        </button>
        <p className="cart-item__value">{quantity} stycken</p>
        <button className="cart-item__btn cart-item__btn--remove" onClick={handleDecrease}>
          -
        </button>
      </article>
    </li>
  );
};
