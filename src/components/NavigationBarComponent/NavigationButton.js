import React from "react";
import NavigationStyle from "./Navigation.module.scss";
import { useNavigate } from "react-router-dom";

const NavigationButton = ({ btnText, funkcija }) => {
  const style = NavigationStyle;
  const navigate = useNavigate();
  return (
    <button
      className={`${style.primaryNavigation_btn} ${style.mobile_menu_btn}`}
      onClick={() => {
        navigate("/contact");
      }}
    >
      {btnText}
    </button>
  );
};

export default NavigationButton;
