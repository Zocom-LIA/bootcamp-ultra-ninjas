export enum SizeTypes {
  "REGULAR" = "regular",
  "SMALL" = "small",
  "MEDIUM" = "medium",
  "LARGE" = "large",
}

export enum StyleTypes {
  "DEFAULT" = "default",
  "DARK" = "dark",
  "LIGHT" = "light",
}

export interface MenuItem {
  name: string;
  desc: string;
  ingredients: string[];
  price: number;
  id: number;
}

export interface User {
  username: string;
  password: string;
  userID?: string;
  staff?: boolean;
}

export interface MenuItemData {
  name: string;
  desc?: string;
  ingredients?: string[];
  price: number;
  id: number;
}

export interface Menu {
  wontons: MenuItemData[];
  dip: MenuItemData[];
}

export interface OrderProps {
  id?: string;
  items: CartItemData[];
  totalOrderPrice: number;
  totalQuantity?: number;
}

export interface CartItemData extends MenuItemData {
  quantity: number;
  orderId?: string;
}

export interface OrderType {
  id: string;
  items: MenuItemData[];
  totalOrderPrice: number;
  totalQuantity?: number;
}
