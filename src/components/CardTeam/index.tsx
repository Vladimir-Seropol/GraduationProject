import { FC } from "react";
import style from "./style.module.css";
import { Team } from "../../types/team.ts";


type Props = {
  data: Team;
};

const CardTeam: FC<Props> = ({ data }) => {
  return (
    <div className={style.card}>
      <div>
        <img src={data.imgUrl} alt="Sneaker" />
      </div>
      <div className={style.info}>
        <h2>{data.name}</h2>
        <p>{data.role}</p>
      </div>
    </div>
  );
};

export default CardTeam;
