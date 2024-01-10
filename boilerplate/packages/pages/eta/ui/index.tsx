import { Header } from "@zocom/header";
import EtaPage  from "../../../base/eta-message/ui/index";
import "./style.scss";
import React from "react";

export const Eta = () => {
  return (
    <section className="etaPage">
      <Header />
        <section className="eta-component">
          <EtaPage/>
        </section>
    </section>
  );
};
