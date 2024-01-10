import React, { useState } from 'react';
import "./style.scss";
import boxTopImage from '../../../.././../assets/boxtop 1.svg'; 
import { Button,ButtonType } from '@zocom/button';
import { Link } from "react-router-dom";


const EtaPage = () => {
  // Mock ETA and order number (replace them with actual values later)
  const mockEta = "5 minutes";
  const mockOrderNumber = "123456";

  // State to track whether the order is done or not
  const [orderDone, setOrderDone] = useState(false);

  // Function to handle order completion
  const handleOrderCompletion = () => {
    setOrderDone(true);
  };

 

  return (
    <div>
      <div className={`eta-page ${orderDone ? 'order-done' : ''}`}>
        <img src={boxTopImage} alt="Box Top" className="eta-page__image" />
        <h1 className="eta-page__title">{orderDone ? 'Dina wontons är klara!' : 'Dina wontons tillagas!'}</h1>
        {orderDone ? null : <h2 className='eta-page__h2'>ETA: {mockEta}</h2>}
        <p>#{mockOrderNumber}</p>
        <div className="eta-page__buttons">
        <Link to="/menu"className='eta-page__linkButton'>
          <Button type={ButtonType.STRETCH}>
            Beställ mer
          </Button>
          </Link>
          <Button type={ButtonType.STRETCH} onClick={handleOrderCompletion}>
          {orderDone ? 'Se kvitto' : 'Se kvitto / Done'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EtaPage;
