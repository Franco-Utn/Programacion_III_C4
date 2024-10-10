import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { heroesData } from "../../../data/heroes";
import styles from "./HeroPage.module.css";
import { IHeroes } from "../../../types/IHeroes";
import { Button } from "react-bootstrap";
export const HeroPage = () => {
  const [hero, setHero] = useState<IHeroes | null>(null);
  const { id } = useParams();
  const getHeroById = () => {
    const result = heroesData.find((hero) => hero.id === id);
    result ? setHero(result) : setHero(null);
  };
  useEffect(() => {
    getHeroById();
  }, []);

  const navigate=useNavigate()
  const handleNavigate =()=>{
    navigate(-1)
  }
  return (
    <>
      {hero && (
        <div className={styles.containerHeroPage}>
          <div className={styles.containerImgHeroPage}>
            <img src={`/assets/heroes/${id}.jpg`} />
          </div>
          <div>
            <h3>{hero.superhero}</h3>
            <ul>
              <li>
                <b>Alter ego: </b>
                {hero.alter_ego}
              </li>
              <li>
                <b>Publicadora </b>
                {hero.publisher}
              </li>
              <li>
                <b>Primera Aparicion</b>
                {hero.first_appearance}
              </li>
            </ul>
            <Button variant="primary" onClick={handleNavigate}>regresar</Button>
          </div>
        </div>
      )}
    </>
  );
};
