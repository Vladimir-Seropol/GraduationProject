import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ISneakers } from "../types";

interface IParams {
  priceFrom: number;
  priceTo: number;
  gender: string;
  sizes: number[];
  isLoading: boolean;
  isError: boolean;
  data: ISneakers[];
}


const BASE_URL: string = "https://01d736031dee7633.mokky.dev";

export const fetchSneakers = createAsyncThunk<ISneakers[], IParams>(
    // Название экшена
    "sneakers/fetchSneakers",
    async (params, { rejectWithValue }) => {
      try {
        // Формируем строку запроса для размеров, если они указаны
        const sizesQuery = params.sizes
          .map((value) => `sizes[]=${value}`)
          // Преобразуем каждый размер в строку формата sizes[]=размер
          // Объединяем размеры в одну строку через '&'
          .join("&");
    // Выполняем GET-запрос к API с параметрами фильтрации
        const { data } = await axios.get<ISneakers[]>(
          `${BASE_URL}/sneakers?price[from]=${params.priceFrom}&price[to]=${params.priceTo
          }${params.gender ? `&gender=${params.gender}` : ""}${params.sizes.length ? `&${sizesQuery}` : ""
          }`
        );
  
        localStorage.setItem("sneakers", JSON.stringify(data));
  
        return data;
      } catch (error) {
        console.log(`Failed to fetch:`);
        return rejectWithValue("Failed to fetch sneakers");
      }
    }
  );




const initialState: any = {
  data: JSON.parse(localStorage.getItem("sneakers") || "[]"),
};


export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default sneakersSlice.reducer;
