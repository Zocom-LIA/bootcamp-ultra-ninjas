import { Header } from "@zocom/header";
import { CartItem } from "@zocom/cartitem";
import "./style.scss";
import { useState } from "react";
import { Button, ButtonType } from "@zocom/button";

interface MenuItemProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface OrderProps {
  cartItems: MenuItemProps[];
  total: number;
  totalQuantity: number;
}

// change when doing real menu and not mockup
export const Order = () => {
  const [cartItems, setCartItems] = useState<MenuItemProps[]>([
    { id: 1, title: "Pizza", price: 10, quantity: 1 },
    { id: 2, title: "Burrito", price: 10, quantity: 1 },
    { id: 3, title: "Spaghett", price: 20, quantity: 1 },
  ]);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const order: OrderProps[] = [
    {
      cartItems: cartItems,
      total: totalPrice,
      totalQuantity: totalQuantity,
    },
  ];

  const handleIncreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const handleDecreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === itemId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item)));

    // If quantity = 0, remove from cart
    setCartItems((prevItems) => prevItems.filter((item) => !(item.id === itemId && item.quantity === 0)));
  };

  // fix later, should send order to BE and then move onto ETA page?
  const handlePurchaseClick = () => {
    console.log("Purchased!");
    console.log(order);
  };

  return (
    <div className="order">
      <Header quantity={totalQuantity} showCircle={totalQuantity > 0 ? true : false} />
      <section className="order__section">
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} title={item.title} price={item.price} quantity={item.quantity} itemIncrease={handleIncreaseQuantity} itemDecrease={handleDecreaseQuantity} />
          ))}
        </ul>
        <article className="order__total">
          <article className="order__total-details">
            <p className="order__total-text">totalt</p>
            <p>inkl 20% moms</p>
          </article>
          <p className="order__total-price">{totalPrice} SEK</p>
        </article>
        <Button type={ButtonType.STRETCH} onClick={handlePurchaseClick}>
          take my money!
        </Button>
      </section>
    </div>
  );
};
