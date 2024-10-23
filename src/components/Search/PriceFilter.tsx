import Nouislider from "nouislider-react";
import { FC } from "react";
import styled from "styled-components";
import "nouislider/distribute/nouislider.css";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { IFormData } from "./index";

interface IProps  {
  setValue: UseFormSetValue<IFormData>;
  register: UseFormRegister<IFormData>;
}

const PriceFilter: FC<IProps> = ({ register, setValue }) => {
  return (
    <PriceFilterStyle>
      <h4>Цена, руб</h4>
      <div className="filter">
        <input type="number" min={1850} max={25768} {...register("startPrice")} />
        <input type="number" min={1850} max={25768} {...register("endPrice")} />
        <Nouislider 
          range={{ min: 1850, max: 25768 }}
          start={[1850, 25768]}
          orientation="horizontal"
          connect
          step={1}
          onChange={([start, end]) => {
            setValue("startPrice", Math.round(start));
            setValue("endPrice", Math.round(end));
          }}
        />
      </div>
    </PriceFilterStyle>
  );
};

const PriceFilterStyle = styled.div`
  color: var(--text);
  font-size: 16px;
  margin-bottom: 29px;

  h4 {
      margin-bottom: 10px;
  }

  .filter {
    border: 1px solid rgba(178, 181, 187, 1);
    background: rgba(255, 244, 238, 1);
    width: 240px;
    // hight: 50px    
    border-radius: 4px;
    width: max-content;
    padding: 10px 0;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      width: 0.5px;
      height: 34px;
      border: 1px solid rgba(178, 181, 187, 1);
    }

    input {
      width: 119px;
     padding:  10px 0;
      border: none;
      text-align: center;
      background: none;
      font-family: Intro Book;
font-size: 16px;
font-weight: 400;
line-height: 16px;

    }
  }

  .noUi {
    &-target {
      width: 100%;
      position: absolute;
      bottom: 0;
      transform: translateY(50%);
      background: none;
      border: none;
    }

    &-horizontal {
      height: 4px;
    }

    &-connect {
      background: #444b58;
    }

    &-handle {
      width: 6px;
      height: 20px;
      background-color: #444b58;
      box-shadow: none;
      border: none;
      top: -8px;
      right: -3px;

      &::before {
        content: none;
      }
      &::after {
        content: none;
      }
    }
  }
`;

export default PriceFilter;
