// Menu.tsx

import React, { useEffect, useState } from 'react';
import { Header } from "@zocom/header";
import "./style.scss";

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
    return React.createElement(
      'div',
      { key: index, className: 'menu-item' },
      <h2>{item.name}</h2>,
      <p>{item.desc}</p>,
      item.ingredients && (
        <ul className="ingredients-list">
          
          {item.ingredients.map((ingredient, ingredientIndex) => (
            <li key={ingredientIndex}>{ingredient}</li>
          ))}
        </ul>
      ),
      <p>Price: {item.price} SEK</p>
    );
  };
  

const MenuComponent = () => {
  const [menu, setMenu] = useState<Menu | null>(null);

  useEffect(() => {
    // Mock data for menu
    const mockMenuData: Menu = {
      wontons: [
        {
          name: "Karlstad",
          desc: "En god friterad wonton med smaker från de värmländska skogarna.",
          ingredients: ["kantarell", "scharlottenlök", "morot", "bladpersilja"],
          price: 9,
        },
        {
            "name":"Bangkok",
            "desc":"En god friterad wonton med smaker från Bangkoks gator.",
            "ingredients":[
               "morot",
               "salladslök",
               "chili",
               "kokos",
               "lime",
               "koriander"
            ],
            "price":9
         },
      ],

      dip: [
        {
          name: "Sweet Chili",
          desc: "Stark och söt dip från Thailänska höglandet.",
          price: 19,
        },
        {
            "name":"Sweet n Sour",
            "desc":"Klassiska sötsura dipsåsen från Kina.",
            "price":19
         },
        
      ],
    };

    setMenu(mockMenuData);
  }, []);

  return (
    <div>
      <Header />
      <div className ="menu">
        <h1 className= "menu_h1">Menu</h1>
        {menu && (
          <div>
            {menu.wontons.map(renderMenuItem)}
            <h2 className = "menu_h2">Dipsås</h2>
            {menu.dip.map(renderMenuItem)}
          </div>
        )}
      </div>
    </div>
  );
};

export  {MenuComponent};

