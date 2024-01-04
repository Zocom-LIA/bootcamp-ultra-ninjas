import "./style.scss";
import cartIcon from "./../../../../../assets/cart.svg";
import logoIcon from "./../../../../../assets/header-logo.svg";
import { useLocation, Link } from "react-router-dom";

type HeaderProps = {
  showCircle?: boolean;
  quantity?: number;
};

export const Header = ({ quantity, showCircle }: HeaderProps) => {
  const location = useLocation();
  const showCartIcon: boolean = location?.pathname === "/menu" || location?.pathname === "/order";
  const kitchenView: boolean = location?.pathname === "/staff/orders";

  const cartIconSrc: string = cartIcon;
  const logoIconSrc: string = logoIcon;

  return (
    <header className="header">
      <img src={logoIconSrc} className="header__icon--logo" alt="logo icon" />
      {showCartIcon && (
        <Link to="/order" className="header__icon--cart">
          <img src={cartIconSrc} alt="cart icon" />
          <div className={"cart__count " + (!showCircle ? "hidden" : null)}>{quantity}</div>
        </Link>
      )}
      {kitchenView && <h1 className="header__text">Kitchen View</h1>}
    </header>
  );
};
