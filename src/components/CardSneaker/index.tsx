import { FC, useState } from "react";
import style from "./style.module.css";
import styled from "styled-components";
import { Sneaker } from "../../types/sneaker";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  postBasket } from "../../store/slices/basketSlice";
import { AppDispatch } from "../../store/store";
import { ISneakers } from "../../store/types";
// import { IState } from "../../images/Group_44.png";

type Props = {
  data: Sneaker;
  item: ISneakers;
};

const CardSneaker: FC<Props> = ({ item, data }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isAdded, setIsAdded] = useState<boolean>(false); // Состояние для отслеживания добавления в корзину

  const handleAddToBasket = () => {
    dispatch(postBasket(item));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); // Скрыть сообщение через 2 секунды
  };

  return (
    <CatalogCardStyle
      $isOpenModal={isOpenModal}
      onClick={() => setIsOpenModal((prev) => !prev)}
    >
      <div className={style.card}>
        <div className={style.product_block}>
          <img src={data.imgUrl} alt="Sneaker" />
          <h2>{data.title}</h2>
          <p>{data.price} p</p>
          <div className={style.add_block}>
            <Link to={`/sneaker/${data.id}`}>
              <img src="/icons/View_product.svg" alt="View button" />
            </Link>

            <div className={isOpenModal ? "modal modal-open" : "modal"}>
                <div className="add" onClick={handleAddToBasket}>
                  <img src="/icons/Add_cart.svg" alt="Add to basket" />
                </div>
             
              {isAdded && (
                <span className={style.successMessage}>
                  Товар добавлен в корзину!
                </span>
              )}

             
            </div>
          </div>
        </div>
      </div>
    </CatalogCardStyle>
  );
};

const CatalogCardStyle = styled.li<{ $isOpenModal: boolean }>`
  .modal {
    position: relative;
  }

  .options {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background: rgba(255, 255, 255, 0.6);
    opacity: 0;
    transition: all 200ms linear;

    .add button {
    padding: 0 3.2px 0 0;
      width: 60px;
      height: 60px;
    //   background-color: var(--text);
      border-radius: 50%;

      @media (min-width: 810px) {
        &:hover {
          background-color: rgb(49, 52, 60);
        }
      }
    }
  }

  @media (min-width: 810px) {
    &:hover .options {
      opacity: 1;
    }
  }

  @media (max-width: 810px) {
    .options {
      opacity: ${(props) => (props.$isOpenModal ? 1 : 0)};
    }
  }

  picture {
    max-width: 280px;
    height: 293px;
    display: inline-block;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    margin-bottom: 6px;
    color: rgb(68, 75, 88);
    font-size: 16px;
    line-height: 19px;
  }

  p {
    color: rgb(68, 75, 88);
    font-family: "Intro", sans-serif;
    font-size: 20px;
    line-height: 20px;
  }
`;
export default CardSneaker;
