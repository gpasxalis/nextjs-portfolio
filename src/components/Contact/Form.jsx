"use client";
import { React, useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Form.module.css";
import { toast } from "react-toastify";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(serviceID, templateID, input, options);

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(error?.text || error);
    }
  };

  return (
    <form className={`${classes.form}`} onSubmit={submitHandler}>
      <div className={`${classes.form__group}`}>
        <input
          type="text"
          placeholder="Όνομα"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          onBlur={checkRequired}
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          placeholder="Email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          onBlur={checkRequired}
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={5}
          placeholder="Το μήνυμά σας"
          value={input.message}
          onChange={(e) => setInput({ ...input, message: e.target.value })}
          onBlur={checkRequired}
          required
        />
      </div>

      <button className={`${classes.form__btn}`} type="submit">
        Υποβολή
      </button>
    </form>
  );
};

export default Form;
