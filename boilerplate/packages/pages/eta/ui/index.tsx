import EtaPage  from "../../../base/eta-message/ui/index";
import "./style.scss";
import React from "react";
import Animation from "../../../../src/Animations";


export const Eta = () => {
  return (
    <Animation>
      <div className="etaPage">
        <EtaPage/>
      </div>
    </Animation>
  );
};