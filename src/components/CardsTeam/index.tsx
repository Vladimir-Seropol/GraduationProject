import style from './style.module.css';
import CardTeam from '..//CardTeam';
import { FC, useEffect, useState } from 'react';
import { Team } from '../../types/team';

type Props = {
  filterValue: string;
}

const CardsTeam: FC<Props> = ({ filterValue }) => {
  const [initiTeams, setInitiTeams] = useState<Team[]>([]);
  const [updateTeams, setUpdateTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);

      const req = await fetch('https://70742e062faa3902.mokky.dev/team');
      const data = await req.json();

      if (data) {
        setInitiTeams(data);
        setUpdateTeams(data);
      } 

    } catch (e) {
      
      setIsLoading(false);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (filterValue) {
      const newArray = initiTeams.filter((item) => item.name.includes(filterValue));
      setUpdateTeams(newArray);
    } else {
      setUpdateTeams(initiTeams);
    }
  }, [filterValue, initiTeams]);

  return (
    <div className={style.container}>
      {isLoading && <p>...loading</p>}
      {isError && <p>Server is dead</p>}
      {updateTeams.map((team) => (
        <CardTeam data={team} key={team.id} />
      ))}
    </div>
  );
}

export default CardsTeam;