import { useState } from "react";
import style from "./style.module.css";
import CardsTeam from "../CardsTeam";


const SectionTeams = () => {
  const [filterValue] = useState("");
  return (
    <div className="wrapper">
<section className="container" id="team">
      <div className={style.container}>
        <h1>Наша команда</h1>
        <img className={style.absolute} src="/images/figure1.png" alt="Figure" />
        <img className={style.absolute} src="/images/Group_44.png" alt="Figure" />
        <div className={style.cardsTeam}>
             <CardsTeam  filterValue={filterValue} />
        </div>
      </div>
    </section>        
    </div>
    
  );
};

export default SectionTeams;
