import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import BasketList from "./BasketList";
import Form from "../../components/Form/index.tsx";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.ts";
import { clearBasket } from "../../store/slices/basketSlice.ts";
import { ISneakers } from "../../store/types.ts";

interface IProps {
  setIsBasketOpen: () => void;
  isBasketOpen ?: boolean;
  items: ISneakers[];
}

const Basket: FC<IProps> = ({ setIsBasketOpen, isBasketOpen }) => {
  const [orderNumber, setOrderNumber] = useState<number | null>(null); // Состояние для хранения номера заказа
  const  [items] = useState<ISneakers[]>([]); // Состояние для хранения списка товаров
  const navigate = useNavigate(); // Инициализируем useNavigate
  const dispatch = useDispatch(); // Инициализируем useDispatch
  const [isOpen, setIsOpen] = useState(isBasketOpen);

  const toggleBasket = () => {
    setIsOpen(!isOpen);
  };




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
    state.basket.data.reduce((total, item) => total + (item.price ?? 0), 0)

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

  const arrowStyle: React.CSSProperties = {
    position: 'relative',  
    left: '8px', 
    top: '4px',
    width: '15px',
    height: '15px',
    transform: 'translateY(-50%)',
    transition: 'transform 0.3s ease'
  };
  

  return (
    <BasketBlockStyle>
      <div className="container">
        <Link to="/">
        <div className="back"></div>
        </Link>
        <div className="basket">
          <div className="design">
            <h5>Оформление заказа</h5>
            <p>Номер заказа: {orderNumber !== null ? orderNumber : "---"}</p>
          </div>

          <div className="sneaker">
            <div className="order">
              <p>Товаров в корзине: {basketLengths}</p>
              <p>Общая сумма заказа: {calculateTotalPrice}₽</p>{" "}
              
             
            </div>
            
            <p onClick={toggleBasket} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
    Состав заказа 
    <img 
      src="src/assets/down-arrow.svg" 
      alt={isOpen ? "Скрыть состав заказа" : "Показать состав заказа"} 
      style={{ ...arrowStyle, transform: isOpen ? 'none' : 'rotate(180deg)' }} 
    />
  </p>

      {isOpen && (
        <ul >
         
              <li >
                <BasketList items={items} isBasketOpen />
              </li>
           
         
         
        </ul>
      )}

            
          </div>

          <InfoStyle>
            <div className="form">
              <Form
                text={""}
                title={""}
                phoneInputProps={{ type: "tel", placeholder: "Номер телефона" }}
                backgroundColor="rgba(255, 255, 255, 1)"
                input={{
                  border: "rgba(246, 246, 246, 1)",
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
  }
  .sneaker {
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid rgba(217, 217, 217, 1);
  }
  .container {
    max-width: 580px;
    
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
    
    background: rgba(255, 255, 255, 1);
    min-width: 580px;
    // max-height: 100vh;
  }
`;

const InfoStyle = styled.div`
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



