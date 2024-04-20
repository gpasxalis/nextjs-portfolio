import React from "react";
import classes from "./ServicesItem.module.css";

const ServicesItem = ({ title, icon, css_class }) => {
  return (
    <div className={`${classes.service__item} ${css_class}`}>
      <span>
        <i className={icon}></i>
      </span>

      <h5>{title}</h5>
    </div>
  );
};

export default ServicesItem;
