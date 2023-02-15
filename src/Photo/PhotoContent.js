import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContexto } from "../UserContext";
import PhotoComments from "./PhotoComments";
import style from "./PhotoContent.module.css";

function PhotoContent() {
  const { clickPhoto } = useContext(userContexto);

  return (
    <div className={style.photo}>
      <div className={style.img}>
        <img src={clickPhoto.src} alt={clickPhoto.title} />
      </div>
      <div className={style.details}>
        <div>
          <p className={style.author}>
            <Link to={`/perfil/${clickPhoto.author}`}>
              @{clickPhoto.author}{" "}
            </Link>
            <span className={style.visualizacoes}>{clickPhoto.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${clickPhoto.id}`}> {clickPhoto.title}</Link>
          </h1>
          <ul className={style.atributos}>
            <li>{clickPhoto.peso} kg</li>
            <li>{clickPhoto.idade} anos</li>
          </ul>
        </div>
      </div>

      <PhotoComments id={clickPhoto.id} comments={`photo.comments`} />
    </div>
  );
}

export default PhotoContent;
