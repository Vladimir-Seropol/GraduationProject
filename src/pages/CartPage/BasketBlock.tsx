import { FC } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BasketList from "./BasketList";
import ButtonRed from "../../components/Buttons/ButtonRed/button.tsx";


interface IProps {
  setIsBasketOpen: () => void;
}

const BasketBlock: FC<IProps> = ({ setIsBasketOpen }) => {
  const navigate = useNavigate(); // Используем useNavigate

  const handleGoToBasket = () => {
    setIsBasketOpen(); // Закрываем корзину
    navigate("/basket"); // Переходим на страницу корзины
  };



  return (
    <BasketBlockStyle>
      <div className="container">
        <div className="back" onClick={setIsBasketOpen}></div>
        <div className="basket">
          <BasketList isBasketOpen items={[]} />
          <InfoStyle>
            <ButtonRed type="button" onClick={handleGoToBasket} text={"Перейти в корзину"} />
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

  .container {
    position: fixed;
    top: 60px;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
  }

  .basket {
    position: absolute;
    z-index: 5;
    right: 20px;
    top: 0;
    box-shadow: 0px -4px 10px 0px rgba(0, 13, 84, 0.1);
    background: rgb(255, 255, 255);
    min-width: 480px;
    padding-top: 10px;
    max-height: 520px;
  }
`;

const InfoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 13px;
  box-shadow: 0px -4px 10px 0px rgba(0, 13, 84, 0.1);
  background: rgb(255, 255, 255);

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


export default BasketBlock;
