import { useContext, useEffect, useState } from "react";
import PhotoContent from "../../Photo/PhotoContent";
import { userContexto } from "../../UserContext";
import style from "./FeedModal.module.css";

function FeedModal({ photos, setModalPhoto }) {
  const { PhotoGet, clickPhoto, photo, setPhoto, count } =
    useContext(userContexto);

  const [dataTest, setDataTest] = useState([]);
  //PhotoGet é a funcao que busca a foto clicada

  useEffect(() => {
    PhotoGet(clickPhoto.id);
  }, [clickPhoto]);

  function HandleOutsideClick(e) {
    if (e.target === e.currentTarget) {
      setModalPhoto(null);
    }
  }
  useEffect(() => {
    setPhoto(photo);
  }, [photos, count]);

  return (
    <div className={style.modal} onClick={HandleOutsideClick}>
      {clickPhoto && <PhotoContent photoclidada={photo} />}
    </div>
  );
}

export default FeedModal;
