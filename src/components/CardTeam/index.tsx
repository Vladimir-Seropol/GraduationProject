import { FC } from "react";
import style from "./style.module.css";
import { Team } from "../../types/team.ts";
// import { Link } from "react-router-dom";

type Props = {
  data: Team;
};

const CardTeam: FC<Props> = ({ data }) => {
  return (
    <div className={style.card}>
      <div>
        <img src={data.imgUrl} alt="" />
      </div>
      <div className={style.info}>
        <h2>{data.name}</h2>
        <p>{data.role}</p>
      </div>
    </div>
  );
};

export default CardTeam;
