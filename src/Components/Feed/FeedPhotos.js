import { useContext, useEffect } from "react";
import { userContexto } from "../../UserContext";
import FeedPhotoItem from "./FeedPhotoItem";
import style from "./FeedPhotos.module.css";

function FeedPhotos({ setModalPhoto }) {
  const { FetchPhotos, photos } = useContext(userContexto);

  useEffect(() => {
    FetchPhotos({ page: 1, total: 6, user: 0 });
  }, []);

  if (photos);

  return (
    <ul className={`${style.feed} animeLeft`}>
      {photos.map((item) => (
        <FeedPhotoItem
          setModalPhoto={setModalPhoto}
          key={item.id}
          photo={item}
        />
      ))}
      FeedPhotos
    </ul>
  );
}

export default FeedPhotos;
