import { useState } from "react";
// import Cards from "../Cards";
// import Search from "../Search";
import style from "./style.module.css";
// import CardsSneaker from "../CardsSneaker";
import CardsTeam from "../CardsTeam";
//import theme from "../../components/SwitchTheme";

const SectionTeams = () => {
  const [filterValue] = useState("");
  return (
    <div className="wrapper">
<section className="container" id="team">
      <div className={style.container}>
        <h1>Наша команда</h1>
        <img className={style.absolute} src="src/images/figure1.png" alt="" />
        <img className={style.absolute} src="src/images/Group_44.png" alt="" />
        <div className={style.cardsTeam}>
             <CardsTeam  filterValue={filterValue} />
        </div>
      </div>
    </section>        
    </div>
    
  );
};

export default SectionTeams;
