import { FC } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { delBasket, ISneakers } from "../../store/slices/basketSlice";
import { AppDispatch } from "../../store/store";

interface IProps {
  isPage?: boolean;
  item: ISneakers;
}

const BasketCard: FC<IProps> = ({ isPage, item }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <BasketCardStyle $isPage={isPage}>
      <picture>
        <img src={item.imgUrl} alt={item.title} />
      </picture>
      <div>
        <h3 className="title">{item.title}</h3>
        <p className="price">{item.price} ₽</p>
      </div>
      <button onClick={() => dispatch(delBasket(item.id))}>
        <img src="src/images/basket1.svg" alt="Удалить" />
      </button>
    </BasketCardStyle>
  );
};



const BasketCardStyle = styled.li<{ $isPage: boolean | undefined }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-bottom: ${(props) => (props.$isPage ? "15px" : "25px")};
  ${(props) => props.$isPage && "padding: 15px 0;"}

  picture {
    width: 100px;
    height: ${(props) => (props.$isPage ? "45px" : "100px")};
    overflow: hidden;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .title {
    color: rgb(77, 77, 77);
    font-size: 14px;
    line-height: 20px;
  }

  .price {
    color: rgb(77, 77, 77);
    font-family: "Intro";
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
  }

  button {
    width: 40px;
    height: 40px;
    padding: 10px;

    &:hover {
      border-radius: 4px;
      background: var(--sec-bg);
    }
  }
`;

export default BasketCard;
