import { Header } from "@zocom/header";
import "./style.scss";
import { Button, ButtonType } from "@zocom/button";
import { StyleTypes } from "@zocom/types";
import { ReceiptComponent } from "@zocom/receiptcomponent";
import { Link } from "react-router-dom";
import Animations from "../../../../src/Animations";
import { useState } from "react";
import { cartOrder } from "@zocom/order";

export const Receipt = () => {
  const [updateCart, setUpdateCart] = useState(cartOrder);

  const handleClick = () => {
    setUpdateCart([]);
    cartOrder.length = 0;
  };

  return (
    <div className="receipt">
      <Header />
      <Animations>
        <section className="receipt__section">
          <ReceiptComponent />
          <section className="receipt__button">
            <Link to="/menu">
              <Button type={ButtonType.STRETCH} style={StyleTypes.DARK} onClick={handleClick}>
                Gör en ny beställning
              </Button>
            </Link>
          </section>
        </section>
      </Animations>
    </div>
  );
};
