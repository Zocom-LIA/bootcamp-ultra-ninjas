import { Header } from "@zocom/header";
import { CartItem } from "@zocom/cartitem";
import "./style.scss";
import { useState } from "react";
import { Button, ButtonType } from "@zocom/button";

const mockMenu = [
  {
    title: "Pizza",
    price: 20,
  },
  {
    title: "Burrito",
    price: 10,
  },
];

export const Order = () => {
  const [cartItems, setCartItems] = useState(mockMenu.map((item) => ({ ...item, amount: 1 })));

  const updateQuantity = (index: number, newQuantity: number) => {
    setCartItems((prevItems) => prevItems.map((item, i) => (i === index ? { ...item, amount: newQuantity } : item)));
  };

  const handlePurchaseClick = () => {
    console.log("Purchased!");
  };

  return (
    <div className="order">
      <Header />
      <section className="order__section">
        <ul>
          {cartItems.map((item, index) => {
            const amount = 1; // temporary
            return <CartItem key={index} amount={amount} price={item.price} title={item.title} index={index + 1} updateQuantity={updateQuantity} />;
          })}
        </ul>

        <Button type={ButtonType.STRETCH} onClick={handlePurchaseClick}>
          take my money!
        </Button>
      </section>
    </div>
  );
};

/*
1. Math fn for individual price
  2. Math for total price
3. Amount btns add or rm when clicked
4. Update items amount to cart icon header

* needs to match up to menu page when adding to cart

*/
