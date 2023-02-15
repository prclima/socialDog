import { useContext } from "react";
import { userContexto } from "../../UserContext";
import style from "./FeedPhotoItem.module.css";

function FeedPhotoItem({ photo, setModalPhoto }) {
  const { setClickPhoto } = useContext(userContexto);

  function HandleClick() {
    setModalPhoto(photo);
    setClickPhoto(photo);
  }
  return (
    <li className={style.photo} onClick={HandleClick}>
      <img src={photo.src} alt={photo.title} />

      <span className={style.visualizacao}>{photo.acessos} </span>
    </li>
  );
}

export default FeedPhotoItem;
