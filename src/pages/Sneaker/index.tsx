import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Sneaker } from "../../types/sneaker";
import style from "./style.module.css";
import ButtonRed from "../../components/Buttons/ButtonRed/button";
import { ISneakers, postBasket } from "../../store/slices/basketSlice";
import { useDispatch } from "react-redux";

const SneakerPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Хук для навигации
  const [sneakerData, setSneakerData] = useState<Sneaker | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(`https://01d736031dee7633.mokky.dev/sneakers/${params.id}`);
        if (!req.ok) throw new Error("Network response was not ok");
        const data = await req.json();
        setSneakerData(data);
      } catch (e) {
        setError("Ошибка при загрузке данных");
        console.log("ERROR->", e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [params.id]);

  const handleSizeSelect = (size: number) => {
    setSelectedSize(size);
  };

  const handleAddToBasket = () => {
    if (selectedSize === null) {
      alert("Пожалуйста, выберите размер перед добавлением в корзину.");
      return;
    }

    const item: ISneakers = {
      ...sneakerData,
      selectedSize,
    };

    dispatch(postBasket(item));
    alert("Кроссовки добавлены в корзину!");
    navigate('/'); // Перенаправление на домашнюю страницу
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className={style.absolute}>
      {sneakerData && (
        <div className={style.item_wrapper}>
          <div className={style.background}>
            <div className={style.container}>
              <img src={sneakerData.imgUrl} alt="" />
              <div className={style.info}>
                <div className={style.article}>
                  <span className={style.article}>Артикул: {sneakerData.vendorСode}</span>
                  <span className={style.article}>В наличии: {sneakerData.inStock} шт</span>
                </div>
                <h2 className={style.title}>{sneakerData.title}</h2>
                <img src="/src/assets/stars.png" alt="" className={style.stars} />
                <p className={style.size}>Выберите размер:</p>
                <div className={style.sizeOptions}>
                  {sneakerData.sizes.map((size) => (
                    <button
                      key={size}
                      className={`${style.sizeButton} ${selectedSize === size ? style.selected : ''}`}
                      onClick={() => handleSizeSelect(size)}
                    >
                      <p>{size}</p>
                    </button>
                  ))}
                </div>
                <span className={style.price}>{sneakerData.price}</span>
                <span className={style.priceold}>{sneakerData.oldPrice}</span>
                <div className={style.button}>
                  <ButtonRed text="Заказать" onClick={handleAddToBasket} />
                </div>
                <p className={style.text}><img src="/src/assets/Vector.svg" alt="" style={{ width: "15px", marginRight: "5px" }} />Бесплатная доставка до двери</p>
                <p className={style.text}><img src="/src/assets/Vector.png" alt="" style={{ width: "15px", marginRight: "5px" }} />Оплата заказа при получении</p>
                <p className={style.text}><img src="/src/assets/Vector.svg" alt="" style={{ width: "15px", marginRight: "5px" }} />Обмен в течение двух недель</p>
              </div>
            </div>
            <div className={style.description}>
              <div>
                <h3>Описание</h3>
                <p>{sneakerData.description}</p>
              </div>
              <div className={style.data}>
                <h3>Характеристики</h3>
                <p>Пол: {sneakerData.gender}</p>
                <p>Цвет: {sneakerData.color}</p>
                <p>Состав: {sneakerData.compound}</p>
                <p>Страна: {sneakerData.country}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SneakerPage;