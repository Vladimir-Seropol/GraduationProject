import style from './style.module.css';
import CardSneaker from '../CardSneaker';
import { FC } from 'react';
import ButtonRed from '../Buttons/ButtonRed/button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { ISneakers } from '../../store/types';
import { fetchSneakers } from '../../store/slices/sneakersSlice';
import { changeLimit } from '../../store/slices/dataSlice';
import React from 'react';

interface IProps {
    gender: string;
    text: string;
    onClick: () => void;
    disabled?: boolean; 
}

const CardsSneaker: FC<IProps> = ({ gender }) => {
  const dispatch = useDispatch<AppDispatch>();
  const sneakers = useSelector<RootState, ISneakers[]>((state) => state.sneakers.data);
  const limit = useSelector<RootState, number>((state) => state.data.limit);
  const isLoading = useSelector<RootState, boolean>((state) => state.sneakers.isLoading);
  const isError = useSelector<RootState, boolean>((state) => state.sneakers.isError);

  const loadMore = () => {
    dispatch(changeLimit()); // Увеличиваем лимит при нажатии на кнопку
  };

  
    React.useEffect(() => {
        dispatch(
          fetchSneakers({
              priceFrom: 0,
              priceTo: 99999,
              gender: gender,
              sizes: [],
              isLoading: false,
              isError: false,
              data: []
          })
        );
      
    const fetchData = async () => {
      try {
        await dispatch(fetchSneakers({
            priceFrom: 0, priceTo: 99999, gender, sizes: [],
            isLoading: false,
            isError: false,
            data: []
        }));
      } catch (error) {
        // Обработка ошибки может быть здесь, если нужно
      }
    };

    fetchData();
}, [dispatch, gender, limit]);

  return (
    <div className={style.container}>
      {isLoading && <p>...loading</p>}
      {isError && <p>Server is dead</p>}
      {sneakers
       .filter((_, index) => index < limit)
        .map((sneaker) => (
          <CardSneaker data={sneaker} key={sneaker.id} item={sneaker} />
        ))}
      
      {limit < sneakers.length && !isLoading && !isError && (
        <ButtonRed 
          text="Показать еще" 
          onClick={loadMore} 
          disabled={limit >= sneakers.length} 
        />
      )}
    </div>
  );
}

export default CardsSneaker;