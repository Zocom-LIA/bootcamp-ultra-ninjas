import "./style.scss";
import cartIcon from "./../../../../../assets/cart.svg";
import logoIcon from "./../../../../../assets/header-logo.svg";
import { useLocation, Link } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const showCartIcon: boolean = location?.pathname === "/menu" || location?.pathname === "/order";
  const kitchenView: boolean = location?.pathname === "/staff/orders";

  const cartIconSrc: string = cartIcon;
  const logoIconSrc: string = logoIcon;

  // Lägg till funktionell uppdatering av cart__count
  // Align kitchen view text vänster för ipad view

  return (
    <header className="header">
      <img src={logoIconSrc} className="header__icon--logo" alt="logo icon" />
      {showCartIcon && (
        <Link to="/order" className="header__icon--cart">
          <img src={cartIconSrc} alt="cart icon" />
          <div className="cart__count">2</div>
        </Link>
      )}
      {kitchenView && <h1 className="header__text">Kitchen View</h1>}
    </header>
  );
};
