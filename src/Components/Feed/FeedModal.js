import { useContext, useEffect } from "react";
import PhotoContent from "../../Photo/PhotoContent";
import { userContexto } from "../../UserContext";
import style from "./FeedModal.module.css";

function FeedModal({ photo, setModalPhoto }) {
  const { PhotoGet, clickPhoto } = useContext(userContexto);

  //PhotoGet é a funcao que busca a foto clicada

  console.log("FeedModal");
  console.log(photo);
  useEffect(() => {
    PhotoGet(photo.id);
  }, [photo]);

  function HandleOutsideClick(e) {
    if (e.target === e.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={style.modal} onClick={HandleOutsideClick}>
      {/* <img src={photo.src} alt="" /> */}
      {clickPhoto && <PhotoContent />}
    </div>
  );
}

export default FeedModal;
