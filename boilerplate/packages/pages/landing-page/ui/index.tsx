import { Link } from "react-router-dom";
import "./style.scss";
import logo from "./../../../../../assets/logo.svg";
import { Button } from "@zocom/button";

export const LandingPage = () => {
  return (
    <main className="landing-page">
      <section className="landing-page__container">
        <img src={logo} className="yygs-logo" alt="YYGS logo" />

        <section className="landing-page__login">
          <h2>Logga in/registrera konto:</h2>
          <Link to="/login">
            <Button>Logga in</Button>
          </Link>
        </section>

        <section className="landing-page__guest">
          <h2>...eller fortsätt som gäst:</h2>
            <Link to="/menu">
              <Button>Meny</Button>
            </Link>
        </section>
      </section>
    </main>
  );
};
