
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

// Определяем интерфейс ISneakers для типизации данных кроссовок
export interface ISneakers {
  color?: string;        
  compound?: string;     
  country?: string;      
  description?: string;  
  gender?: string;       
  id: number;           
  imgUrl?: string;       
  inStock?: number;      
  oldPrice?: number;     
  price?: number;        
  sizes?: number[];      
  stars?: number;        
  title?: string;        
  vendorСode?: string;  
  selectedSize?: number; 
  
}

// Определяем базовый URL для API
const BASE_URL: string = "https://01d736031dee7633.mokky.dev";

// Создаем асинхронный экшен для получения корзины
export const fetchBasket = createAsyncThunk<ISneakers[]>(
  
  "basket/fetchBasket", 
  async (): Promise<ISneakers[]> => { 
    try {
      // Выполняем GET-запрос к API для получения данных корзины
      const { data } = await axios.get<ISneakers[]>(`${BASE_URL}/basket/`);

      return data; 
    } catch (error) {
      console.log("Failed to fetch:"); 
      return []; 
    }
  }
);

// Создаем асинхронный экшен для добавления кроссовка в корзину
export const postBasket = createAsyncThunk<ISneakers, ISneakers>(
  "basket/postBasket", 
  async (item) => { 
    try {
      // Выполняем POST-запрос к API для добавления кроссовка в корзину
      const { data } = await axios.post(`${BASE_URL}/basket`, item);

      return data; 
    } catch (error) {
        console.error("Error posting to basket:", error);
      throw new Error("Failed to post basket"); 
    }
  }
);

// Создаем асинхронный экшен для удаления кроссовка из корзины
export const delBasket = createAsyncThunk<number, number>(
  "basket/delBasket", 
  async (id) => { 
    try {
      // Выполняем DELETE-запрос к API для удаления кроссовка из корзины
      await axios.delete(`${BASE_URL}/basket/${id}`);

      return id; 
    } catch (error) {
      throw new Error("Failed to delete basket"); 
    }
  }
);

// Определяем интерфейс состояния корзины
interface IState {
  data: ISneakers[]; 
}

// Начальное состояние корзины
const initialState: IState = {
  data: [], 
};



// Создаем срез состояния для корзины с помощью createSlice
export const basketSlice = createSlice({
  name: "basket",
  initialState,   
  reducers: {
    addToBasket(state, action: PayloadAction<any>) {
        state.data.push(action.payload);
      },
      clearBasket(state) {
        state.data = []; // Очистка корзины
      },

  },   
  extraReducers: (builder) => { 
    // Обработка успешного выполнения fetchBasket
    builder.addCase(fetchBasket.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    // Обработка успешного выполнения postBasket
    builder.addCase(postBasket.fulfilled, (state, action) => {
      state.data.push(action.payload); 
    });

    // Обработка успешного выполнения delBasket
    builder.addCase(delBasket.fulfilled, (state, action) => {
      state.data = state.data.filter((el) => el.id !== action.payload); 
    });
  },
});
export const  {addToBasket, clearBasket}  = basketSlice.actions;

// Экспортируем редьюсер среза состояния по умолчанию
export default basketSlice.reducer;
