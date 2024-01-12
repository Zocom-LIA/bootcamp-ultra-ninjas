import { Header } from "@zocom/header";
import { CartItem } from "@zocom/cartitem";
import "./style.scss";
import { useState } from "react";
import { Button, ButtonType } from "@zocom/button";
import { StyleTypes } from "@zocom/types";
import { TotalPrice } from "@zocom/totalprice";
import { OrderProps, CartItemData } from "@zocom/types";
import { Link } from "react-router-dom";
import { submitToApi } from "../../../../src/api";

// change when doing real menu and not mockup
// export const mockOrder: CartItemData[] = [];

export const cartOrder: CartItemData[] = [];

export const Order = () => {
  const [cartItems, setCartItems] = useState<CartItemData[]>(cartOrder);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const order: OrderProps[] = [
    {
      items: cartItems,
      totalOrderPrice: totalPrice,
      totalQuantity: totalQuantity,
    },
  ];

  // const handleIncreaseQuantity = async (itemId: number) => {
  //   setCartItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)));

  //   handleOrder(itemId);
  // };

  const handleDecreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === itemId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item)));
    setCartItems((prevItems) => prevItems.filter((item) => !(item.id === itemId && item.quantity === 0)));
  };

  // fix later, should send order to BE and then move onto ETA page?
  const handlePurchaseClick = () => {
    console.log("Purchased!");
    console.log(order);
  };

  // API

  const handleOrder = async (itemId: number, e: React.MouseEvent) => {
    e.preventDefault();
    const categoryType = itemId >= 6 ? "Dip" : "Wontons";

    const dataToSend = {
      itemId: itemId,
      category: categoryType,
      // id: orderId,
    };
    console.log("hello, itemId:", itemId, "categoryType:", categoryType, "dataToSend::", dataToSend);

    const data = dataToSend;
    const link = "/api/order/cart/da55b281-6e0f-444a-a0a3-37ac342fa602";

    // below separate + or - btn (add setCartItems for del too)
    const method = "POST"; // delete for remove

    setCartItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item)));

    const response = await submitToApi(data, method, link);
    console.log("itemData", itemId, "data", data);

    if (response.success == true) {
      // add the setCartItems here?
      console.log("yaaas");
    } else {
      console.log("Error");
    }

    // if - clicked
  };

  return (
    <div className="order">
      <Header quantity={totalQuantity} showCircle={totalQuantity > 0 ? true : false} />
      <section className="order__section">
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} showQuantityButtons={true} itemIncrease={handleOrder} itemDecrease={handleDecreaseQuantity} />
          ))}
        </ul>
        {totalQuantity === 0 ? (
          <article>
            <h3 className="order__empty-text">Din varukorg är tom</h3>
            <TotalPrice total={totalPrice} />
            <Link to="/menu">
              <Button type={ButtonType.STRETCH} style={StyleTypes.DARK}>
                meny
              </Button>
            </Link>
          </article>
        ) : (
          <article>
            <TotalPrice total={totalPrice} />
            <Link to="/order/eta">
              <Button type={ButtonType.STRETCH} style={StyleTypes.DARK} onClick={handlePurchaseClick}>
                take my money!
              </Button>
            </Link>
          </article>
        )}
      </section>
    </div>
  );
};
