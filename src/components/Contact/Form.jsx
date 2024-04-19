"use client";
import React from "react";
import classes from "./Form.module.css";


const Form = () => {
  
  const submitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Message" required />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;