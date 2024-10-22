import { FC } from "react";
import styled from "styled-components";
import PriceFilter from "./PriceFilter";
import GenderFilter from "./GenderFilter";
import SizesFilter from "./PriceFilter";
import { useDispatch } from "react-redux";
import { RegisterOptions, SubmitHandler, useForm, UseFormRegisterReturn } from "react-hook-form";
import { fetchSneakers } from "../../store/slices/sneakersSlice";
import { AppDispatch } from "../../store/store";
import { getBaseLimit } from "../../store/slices/dataSlice";

interface IProps {
  setGender: (gender: string) => void;
}

export interface IFormData {
  startPrice: number;
  endPrice: number;
  gender: string;
  sizes: number[];
}

const CatalogFilter: FC<IProps> = ({ setGender }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { register, handleSubmit, setValue } = useForm<IFormData>({
    // Устанавливаем начальные значения для полей формы.
    defaultValues: {
      startPrice: 0,
      endPrice: 99999,
      gender: "",
      sizes: [],
    },
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    setGender(data.gender);
    // Вызываем асинхронный экшен `fetchSneakers`, передавая ему объект с параметрами фильтрации:
    dispatch(
      fetchSneakers({
        priceFrom: data.startPrice,
        priceTo: data.endPrice,
        gender: data.gender,
        sizes: data.sizes,
      })
    );
  };

  return (
    <CatalogFilterStyle
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h3>Подбор по параметрам</h3>
      </div>
      <PriceFilter register={register} setValue={setValue} />
      <GenderFilter setValue={setValue} />
      <SizesFilter setValue={setValue} register={function <TFieldName extends "gender" | "sizes" | "startPrice" | "endPrice" | `sizes.${number}` = "gender" | "sizes" | "startPrice" | "endPrice" | `sizes.${number}`>(name: TFieldName, options?: RegisterOptions<IFormData, TFieldName> | undefined): UseFormRegisterReturn<TFieldName> {
              throw new Error("Function not implemented.");
          } } />
      <button type="submit" onClick={() => dispatch(getBaseLimit())}>
        Применить
      </button>
      <button
        type="reset"
        onClick={() =>
          onSubmit({ startPrice: 0, endPrice: 99999, gender: "", sizes: [0] })
        }
      >
        Сбросить
      </button>
    </CatalogFilterStyle>
  );
};

const CatalogFilterStyle = styled.form`
  background: var(--sec-bg);
  border-radius: 4px;
  width: max-content;
  padding: 15px 20px 20px;
  max-width: 280px;
  height: fit-content;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    appearance: textfiled;
    -moz-appearance: textfield;
    background-color: var(--sec-bg);
  }

  h3 {
    margin-bottom: 15px;
    color: var(--text);
    font-size: 24px;
    line-height: 29px;
  }
  h4 {
    color: var(--text);
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 6px;
  }

  button[type="submit"] {
    color: var(--white);
    font-family: "Intro", sans-serif;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid var(--sec-bg);
    border-radius: 4px;
    background-color: var(--text);
    padding: 22px 48px;
    width: 100%;
    margin-bottom: 20px;

    &:hover {
      background: rgb(49, 52, 60);
    }

    &:active {
      background: rgba(49, 52, 60, 0.97);
    }
  }

  button[type="reset"] {
    color: rgb(68, 75, 88);
    font-family: "Intro", sans-serif;
    font-size: 16px;
    line-height: 16px;
    width: 100%;
    text-transform: lowercase;

    &:hover {
      color: rgba(68, 75, 88, 0.8);
    }
  }

  @media (max-width: 810px) {
    position: absolute;
    left: -100%;
    transition: all 200ms linear;
    z-index: 2;

    &.open {
      left: 20px;
    }
  }
`;

export default CatalogFilter;
