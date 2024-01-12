import { CartItem } from "@zocom/cartitem";
import "./style.scss";
import { cartOrder } from "@zocom/order";
import { TotalPrice } from "@zocom/totalprice";
import logoIcon from "./../../../../../assets/logo.svg";

export const ReceiptComponent = () => {
  const total = cartOrder.reduce((acc, item) => acc + item.info.price * item.quantity, 0);
  const orderId = "4kjwsdf234k";
  console.log("cartItem", CartItem);

  return (
    <article className="receipt-view">
      <header className="receipt-view__header">
        <img src={logoIcon} className="header__logo" alt="logo icon" />
        <p className="header__text">kvitto</p>
        <p className="header__order-id">#{orderId}</p>
      </header>
      <ul>
        {cartOrder.map((item) => (
          <CartItem key={item.info.id} id={item.info.id} name={item.info.name} price={item.info.price} quantity={item.quantity} showQuantityButtons={false} />
        ))}
      </ul>
      <TotalPrice total={total} />
    </article>
  );
};
