// Menu.tsx

import React, { useEffect, useState } from 'react';
import { Header } from "@zocom/header";
import "./style.scss";
import { ReactNode } from 'react';
import { StyleTypes } from '@zocom/types';
import menuData from './../../../../../data/menu.json';



/* Local Component Types */
export enum ButtonType {
  'REGULAR' = 'regular',
  'STRETCH' = 'stretch'
}

/* Component Props */
type ButtonProps = {
  children: ReactNode | ReactNode[];
  style?: StyleTypes;
  type?: ButtonType; 
  onClick: () => void;
}


/* Component */
const Button = ({ 
  children, 
  type = ButtonType.REGULAR, // default value
  style = StyleTypes.DEFAULT, // default value
  onClick
}: ButtonProps) => {
  return (
    <button className={`button__${type}--${style}`} onClick={() => onClick()}>{children}</button>
  );
}



interface MenuItemData {
  name: string;
  desc: string;
  ingredients?: string[];
  price: number;
}

interface Menu {
  wontons: MenuItemData[];
  dip: MenuItemData[];
}

const renderMenuItem = (item: MenuItemData, index: number): JSX.Element => {

  const handleClick = () => {
    // Add your desired action here
    console.log(`Clicked on ${item.name}`);
  };

  return (
    <div key={index} className="menu-item" onClick={handleClick}>
    
      <h2 className='menu_h2'>{item.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'.'.repeat(40 - item.name.length)} {item.price} SEK</h2>
      
      {item.ingredients && (
        <ul className="ingredients-list">
          {item.ingredients.map((ingredient, ingredientIndex) => (
            <li key={ingredientIndex}>{ingredient}</li>
          ))}
        </ul>
      )}
    
    </div>
  );
};

  const renderDipButton = (item: MenuItemData, index: number): JSX.Element => {
    const handleClick = () => {
      // Add your desired action here
      console.log(`Clicked on ${item.name}`);
    };
  
    return (
      <Button key={index} type={ButtonType.REGULAR} style={StyleTypes.DEFAULT} onClick={handleClick}>
        <h2>{item.name}</h2>
        
      </Button>
    );
  };
  

const MenuComponent = () => {
  const [menu, setMenu] = useState<Menu | null>(null);

  useEffect(() => {
      setMenu(menuData);
    }, []);

   

  return (
    <div>
      <Header />
      <div className ="menu">
        <h1 className= "menu_h1">Meny</h1>
        {menu && (
          <div>
            {menu.wontons.map(renderMenuItem)}
            <h2 className = "menu_h2">Dipsås</h2>
            <div className="dip-buttons-container">
              {menu.dip.map(renderDipButton)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export  {MenuComponent};

