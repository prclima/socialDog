import { useContext, useEffect } from "react";
import { userContexto } from "../../UserContext";
import FeedPhotoItem from "./FeedPhotoItem";
import style from "./FeedPhotos.module.css";

function FeedPhotos({ user, setModalPhoto }) {
  const { FetchPhotos, photos } = useContext(userContexto);

  useEffect(() => {
    FetchPhotos({ page: 1, total: 6, user });
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
    </ul>
  );
}

export default FeedPhotos;
