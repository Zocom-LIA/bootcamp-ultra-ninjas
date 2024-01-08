import { Header } from "@zocom/header";
import   {LoginComponent}  from "../../../base/login/ui/index";
import "./style.scss";

import React from "react";

export const Login = () => {
  return (
    <div>
      <Header />
      <LoginComponent/>
      
    </div>
  );
};
