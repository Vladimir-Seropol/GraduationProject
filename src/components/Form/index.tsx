import React, { useState } from "react";
import ButtonRed from "../Buttons/ButtonRed/button";
import style from "./style.module.css";

// interface InputProps {
//     type: string; 
//     placeholder: string; 
//   }
  

interface ButtonProps {
    text: string;
    title: string;
  phoneInputProps: React.InputHTMLAttributes<HTMLInputElement>;
    style?: React.CSSProperties;
    backgroundColor?: string;
  }


const ContactForm: React.FC<ButtonProps> = ({ text, title, phoneInputProps, backgroundColor }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Здесь можно добавить логику для обработки отправленных данных
    console.log("Имя:", name);
    console.log("Телефон:", phone);

    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.form} style={{ backgroundColor }}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div>
          <label>
            
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              required
            />
          </label>
        </div>
        <div>
          <label>
           
            <input
              type={phoneInputProps.type}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={phoneInputProps.placeholder}
              required
            />
          </label>
        </div>
        <ButtonRed text="Отправить" onClick={() => {}} />
      </div>
    </form>
  );
};

export default ContactForm;
