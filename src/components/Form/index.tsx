import React, { useState } from "react";
import ButtonRed from "../Buttons/ButtonRed/button";
import style from "./style.module.css";

interface ButtonProps {
  text: string;
  title: string;
  phoneInputProps: React.InputHTMLAttributes<HTMLInputElement>;
  input: {
    border: string;
    backgroundColor: string;
  };
  backgroundColor?: string;
  showNameField?: boolean;
  buttonText?: string; // Текст кнопки
  buttonStyle?: React.CSSProperties; // Стиль кнопки
  onButtonClick: () => void; // Обработчик события для кнопки
}

const ContactForm: React.FC<ButtonProps> = ({
  text,
  title,
  phoneInputProps,
  backgroundColor,
  showNameField = false,
  buttonText = "Отправить", // Значение по умолчанию
  buttonStyle, 
  onButtonClick,
  input  
}) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Проверка на заполненность полей
    if (!name || !phone || (showNameField && !email)) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    // Проверка формата email
    const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
    if (showNameField && !emailPattern.test(email)) {
      alert("Введите корректный email.");
      return;
    }

    console.log("Имя:", name);
    console.log("Телефон:", phone);
    console.log("Email:", email);

    // Очищаем поля формы
    setName("");
    setPhone("");
    setEmail("");

    // Вызываем обработчик нажатия кнопки
    if (onButtonClick) {
      onButtonClick(); 
      console.log("Кнопка нажата!"); // Сообщение в консоль
    }
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
              style={{
                border: input.border,
                backgroundColor: input.backgroundColor,
              }}
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
              style={{
                border: input.border,
                backgroundColor: input.backgroundColor,
              }}
              required
            />
          </label>
        </div>
        {showNameField && (
          <div>
            <label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                style={{
                  border: input.border,
                  backgroundColor: input.backgroundColor,
                }}    
                required
              />
            </label>
          </div>
        )}
        <ButtonRed  text={buttonText} style={buttonStyle} type="submit" />
      </div>
    </form>
  );
};

export default ContactForm;