import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import BasketList from "./BasketList";
import Form from "../../components/Form/index.tsx";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { clearBasket, ISneakers } from "../../store/slices/basketSlice.ts";



interface IProps {
  setIsBasketOpen: () => void;
  item: ISneakers;
}

const Basket: FC<IProps> = ({ setIsBasketOpen }) => {
  const [orderNumber, setOrderNumber] = useState<number | null>(null); // Состояние для хранения номера заказа
  const items = useState<any[]>([]); // Состояние для хранения списка товаров
  const navigate = useNavigate(); // Инициализируем useNavigate
  const dispatch = useDispatch(); // Инициализируем useDispatch



  // Функция для генерации случайного номера заказа
  const generateOrderNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  // Генерация номера заказа при монтировании компонента
  useEffect(() => {
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    console.log("Номер заказа сгенерирован:", newOrderNumber);
  }, []); // Пустой массив зависимостей, чтобы выполнить только один раз

  // Функция для вычисления общей суммы заказа
  const calculateTotalPrice = useSelector<RootState, number>((state) =>
    state.basket.data.reduce((total, item) => total + item.price, 0)
  );

  const handleButtonClick = () => {
    console.log("Кнопка нажата! Номер заказа:", orderNumber);
    if (typeof setIsBasketOpen === "function") {
      setIsBasketOpen(); // Закрываем корзину
    }
    dispatch(clearBasket()); // Очищаем корзину

    navigate("/");
  };

  // Функция для вычисления общего количества товаров в заказе
  const basketLengths = useSelector<RootState, number>(
    (state) => state.basket.data.length
  );

  return (
    <BasketBlockStyle>
      <div className="container">
        <div className="back" onClick={setIsBasketOpen}></div>
        <div className="basket">
          <div className="design">
            <h5>Оформление заказа</h5>
            <p>Номер заказа: {orderNumber !== null ? orderNumber : "---"}</p>
          </div>

          <div className="sneaker">
            <div className="order">
              <p>Товаров в корзине: {basketLengths}</p>
              <p>Общая сумма заказа: {calculateTotalPrice}₽</p>{" "}
              
              <p>Состав заказа</p>
            </div>

            <BasketList items={items} isBasketOpen />
          </div>

          <InfoStyle>
            <div className="form">
              <Form
                text={""}
                title={""}
                phoneInputProps={{ type: "tel", placeholder: "Номер телефона" }}
                backgroundColor="rgba(255, 255, 255, 1)"
                input={{
                  border: "",
                  backgroundColor: "rgba(246, 246, 246, 1)",
                }}
                showNameField={true}
                buttonText="Оформить заказ"
                onButtonClick={handleButtonClick}
              />
            </div>
          </InfoStyle>
        </div>
      </div>
    </BasketBlockStyle>
  );
};

const BasketBlockStyle = styled.div`
  .back {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(68, 75, 88, 0.7);
    z-index: 4;
  }
  h5 {
    font-family: Intro Bold;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    text-align: left;
    color: rgba(68, 75, 88, 1);
  }
  .design {
    display: flex;
    justify-content: space-between;
    padding: 40px;
  }
  .order {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 0 17px 30px;
  }
  p {
    font-family: Intro Book;
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    color: rgba(178, 181, 187, 1);
    pading: 30px 30px;
  }
  .sneaker {
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid rgba(217, 217, 217, 1);
  }
  .container {
    max-width: 580px;
    // position: fixed;
    top: 60px;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
  }

  .basket {
    position: relative;
    z-index: 5;
    top: -55vh;
    // box-shadow: 0px -4px 10px 0px rgba(0, 13, 84, 0.1);
    background: rgba(255, 255, 255, 1);
    min-width: 580px;
    max-height: 100vh;
  }
`;

const InfoStyle = styled.div`
  //   padding: 20px 20px;
  // box-shadow: 0px -4px 10px 0px rgba(0, 13, 84, 0.1);
  max-width: 580px;
  background: rgba(255, 255, 255, 1);

  .form {
    max-width: 500px;
    margin: 0 auto;
  }

  h5 {
    color: rgb(77, 77, 77);
    font-size: 14px;
    line-height: 20px;
  }

  p {
    color: rgb(77, 77, 77);
    font-family: "Intro";
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
  }
`;

export default Basket;
function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}

// function clearBasket(): any {
//     throw new Error("Function not implemented.");
// }

