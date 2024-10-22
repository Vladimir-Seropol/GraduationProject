import { useState } from "react";
import Search from "../Search";
import style from "./style.module.css";
import CardsSneaker from "../CardsSneaker";


const SectionSneakers = () => {
  const [filterFunction, setFilterFunction] = useState<() => (sneakers: any[]) => any[]>(() => (sneakers) => sneakers);
  const [gender, setGender] = useState<string>("");

  return (

    <section className="container" id="catalog">
      <div className={style.container}>
        <h2>Каталог</h2>
        <div className={style.sneakers_block}>
          <Search setFilterValue={setFilterFunction} setGender={setGender}/>
          <CardsSneaker gender={gender} text={""} onClick={function (): void {
                      throw new Error("Function not implemented.");
                  } } />
        </div>

      </div>
    </section>
  );
};

export default SectionSneakers;
