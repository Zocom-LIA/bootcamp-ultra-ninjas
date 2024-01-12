import "./style.scss";
import { useState } from "react";
import { Button, ButtonType } from "@zocom/button";
import { Header } from "@zocom/header";
import { Link } from "react-router-dom";
import logoImage from '../../../.././../assets/logo.svg'; 

export const LandingPage = () => {
 
 

  return (
    <main className="landing-page">
      <Header />
      
      <div className="landing-page__content">
      <img src={logoImage} alt="Box Top" className="eta-page__image" />
      <h1> YUM YUM GIM</h1>
      
      <div className="landing-page__btnContainer">
      
      <Link to="/menu"className='eta-page__linkButton'>
          <Button type={ButtonType.STRETCH}>
            Meny
          </Button>
          </Link>
          <Link to="/login"className='eta-page__linkButton'>
          <Button type={ButtonType.STRETCH}>
            Login
          </Button>
          </Link>
      </div>
       
      </div>
      
      
     
     

    </main>
  );
};
