import { FC, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import styled from "styled-components";
import { IFormData } from "./index";

const sizesData = [35, 36, 37, 38, 39, 40, 41, 42, 43];

interface IProps {
  setValue: UseFormSetValue<IFormData>;
}

const SizesFilter: FC<IProps> = ({ setValue }) => {
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);

  const handleSizeChange = (size: number) => {
    
    setSelectedSizes((prevSelectedSizes) => {
      const newSizes = prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size];
      setValue("sizes", newSizes);
      return newSizes;
    });
  };

  return (
    <SizesFilterStyle>
      <h4>Размер</h4>

      <ul className="filter">
        {sizesData.map((size) => (
          <li key={size}>
            <input
              type="checkbox"
              id={size.toString()}
              name="sizes"
              onChange={() => handleSizeChange(size)}
            />
            <label htmlFor={size.toString()}>{size.toString()}</label>
          </li>
        ))}
      </ul>
    </SizesFilterStyle>
  );
};

const SizesFilterStyle = styled.div`
  margin-bottom: 20px;
  
  .filter {
    display: flex;
    flex-wrap: wrap;

    input {
      visibility: hidden;
      position: absolute;
    }

    input:checked + label {
      background-color: var(--small-text);
    }

    li {
      width: calc(100% / 3);
      label {
        display: inline-block;
        padding: 26px 0;
        width: 100%;
        text-align: center;
        border: 1px solid rgb(219, 187, 169);
        margin: 0;
        // padding: 0;
      }

      @media (min-width: 768px) {
        &:hover {
          cursor: pointer;
          background: rgba(219, 187, 169, 0.7);
        }

        &:active {
          background: rgba(219, 187, 169, 1);
        }
      }
    }
  }
`;

export default SizesFilter;
