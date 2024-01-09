export interface MenuItem {
  name: string;
  desc: string;
  ingredients: string[];
  price: number;
}

export interface ResponseBody {
  success: boolean;
  message: string;
  username?: string;
  userID?: string;
  token?: string;
}

export interface UserType {
  username: string;
  password: string;
  userID?: string;
  staff?: boolean;
}
