import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { userContexto } from "../UserContext";
import PhotoComments from "./PhotoComments";
import style from "./PhotoContent.module.css";
import PhotoDelete from "./PhotoDelete";

function PhotoContent({ photoclidada }) {
  const { PhotoGet, clickPhoto, photo, data } = useContext(userContexto);

  return (
    <div className={style.photo}>
      <div className={style.img}>
        <img src={clickPhoto.src} alt={clickPhoto.title} />
      </div>

      <div className={style.details}>
        <div>
          <p className={style.author}>
            {data.data && data.data.user_login === photo.photo.author ? (
              <PhotoDelete id={clickPhoto.id} />
            ) : (
              <Link to={`/perfil/${clickPhoto.author}`}>
                @{clickPhoto.author}{" "}
              </Link>
            )}

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
      <PhotoComments id={clickPhoto.id} comments={photoclidada} />
    </div>
  );
}

export default PhotoContent;
