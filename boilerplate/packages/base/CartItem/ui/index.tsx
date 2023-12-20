import { useState } from "react";
import "./style.scss";

type CartItemProps = {
  title: string;
  price: number;
  amount: number;
  index: number;
  updateQuantity: (index: number, newQuantity: number) => void;
};

export const CartItem = ({ title, price, amount, index, updateQuantity }: CartItemProps) => {
  const [quantity, setQuantity] = useState(amount);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    updateQuantity(index, newQuantity);
  };

  return (
    <li className="cart-item">
      <article className="cart-item__details">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__divider">.......................................</p>
        <p className="cart-item__price">{price} SEK</p>
      </article>

      <article className="cart-item__amount">
        <button className="cart-item__btn cart-item__btn--add" onClick={() => handleQuantityChange(quantity + 1)}>
          +
        </button>
        <p className="cart-item__value">{quantity} stycken</p>
        <button className="cart-item__btn cart-item__btn--remove" onClick={() => handleQuantityChange(quantity - 1)}>
          -
        </button>
      </article>
    </li>
  );
};
