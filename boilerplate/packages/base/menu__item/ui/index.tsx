import { useEffect, useState } from "react";
import { Header } from "@zocom/header";
import { Button, ButtonType } from "@zocom/button";
import { MenuItemData, Menu } from "@zocom/types";
import menuData from "./../../../../../data/menu.json";
import { cartOrder } from "@zocom/order";
import { submitToApi } from "../../../../src/api";
import "./style.scss";
import { StyleTypes } from "@zocom/types";

const MenuComponent = () => {
  const [menu, setMenu] = useState<Menu | null>(null);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    setMenu(menuData);
    setTotalQuantity(cartOrder.reduce((acc, item) => acc + item.quantity, 0));
  }, []);

  const addItemToCart = async (item: MenuItemData) => {
    const itemIndex = cartOrder.findIndex((orderItem) => orderItem.id === item.id);
    const totalPrice = cartOrder.reduce((acc, item) => acc + item.price * item.quantity, 0);
    console.log("33", totalPrice);

    if (itemIndex !== -1) {
      cartOrder[itemIndex].quantity += 1;
    } else {
      cartOrder.push({
        ...item,
        quantity: 1,
      });
    }

    const updatedTotalQuantity = cartOrder.reduce((acc, orderItem) => acc + orderItem.quantity, 0);
    setTotalQuantity(updatedTotalQuantity);

    try {
      console.log("cartOrder: ", cartOrder);
      const submitResponse = await submitToApi(cartOrder, "POST", "/api/order/cart/");
      console.log("API Response:", submitResponse);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  const handleMenuItemClick = (item: MenuItemData) => {
    console.log(`Clicked on ${item.name}`);
    addItemToCart(item);
  };

  return (
    <div>
      <Header quantity={totalQuantity} showCircle={totalQuantity > 0} />
      <div className="menu">
        <h1 className="menu_h1">Meny</h1>
        {menu && (
          <div>
            {menu.wontons.map((item) => (
              <div key={item.id} className="menu-item" onClick={() => handleMenuItemClick(item)}>
                <div className="menu-item__name">
                  <h2 className="menu_h2">{item.name}</h2>
                  <p className="menu-item__divider"></p>
                  <div className="menu-item__price">
                    <h2 className="menu_h2">{item.price}</h2>
                    <h2 className="menu_h2">SEK</h2>
                  </div>
                </div>

                {item.ingredients && (
                  <ul className="ingredients-list">
                    {item.ingredients.map((ingredient, ingredientIndex) => (
                      <li key={ingredientIndex}>{ingredient}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <h2 className="menu_h2">Dipsås</h2>
            <div className="dip-buttons-container">
              {menu.dip.map((item) => (
                <Button key={item.id} type={ButtonType.REGULAR} style={StyleTypes.DEFAULT} onClick={() => handleMenuItemClick(item)}>
                  <h2>{item.name}</h2>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { MenuComponent };
