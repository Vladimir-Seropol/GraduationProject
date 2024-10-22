import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Sneaker } from "../../types/sneaker";
import style from "./style.module.css";
import ButtonRed from "../../components/Buttons/ButtonRed/button";

const SneakerPage = () => {
  const params = useParams();
  const [sneakerData, setSneakerData] = useState<Sneaker | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null); // Состояние для выбранного размера
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/cart"); // Переход к корзине
};

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(`https://01d736031dee7633.mokky.dev/sneakers/${params.id}`);
        const data = await req.json();
        setSneakerData(data);
      } catch (e) {
        console.log("ERROR->", e);
      }
    };
    getData();
  }, [params.id]);

  const handleSizeSelect = (size: number) => {
    setSelectedSize(size); // Устанавливаем выбранный размер
  };

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
                  <ButtonRed text="Заказать" onClick={handleClick} />
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























