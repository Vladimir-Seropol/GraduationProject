import { FC, useContext } from "react";
import PriceFilter from "./PriceFilter";
import GenderFilter from "./GenderFilter";
import SizesFilter from "./SizesFilter";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppDispatch } from "../../store/store";
import { fetchSneakers } from "../../store/slices/sneakersSlice";
import { getBaseLimit } from "../../store/slices/dataSlice";
import ButtonLight from "../Buttons/ButtonLight/button";
import style from "./style.module.css";
import ButtonDark from "../Buttons/ButtonDark/button";
import { ThemeContext } from "../../App";


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
  
  const { theme } = useContext(ThemeContext)!;
  const backgroundStyle =
    theme === "dark"
      ? { background: "none" }
      : { background: "rgba(255, 244, 238, 1)" };

  const { register, handleSubmit, setValue } = useForm<IFormData>({
    // Устанавливаем начальные значения для полей формы.
    defaultValues: {
      startPrice: 1850,
      endPrice: 25768,
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
          isLoading: false,
          isError: false,
          data: []
      })
    );
  };

  return (
    <form className={style.container} 
    style={backgroundStyle}
      onSubmit={handleSubmit(onSubmit)}
    >
      
        <h3 className={style.title}>Подбор по параметрам</h3>
      
      <PriceFilter register={register} setValue={setValue} />
      <GenderFilter setValue={setValue} />
      <SizesFilter setValue={setValue} />
      <div className={style.button_light}>
      <ButtonDark text="Применить" onClick={() => dispatch(getBaseLimit())} />
        <ButtonLight text="Сбросить" onClick={() => onSubmit({ startPrice: 1850, endPrice: 25768, gender: "", sizes: [0] })} />
            </div>
    </form>
  );
};



export default CatalogFilter;
