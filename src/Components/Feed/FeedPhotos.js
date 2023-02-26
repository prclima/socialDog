import { useContext, useEffect } from "react";
import { userContexto } from "../../UserContext";
import FeedPhotoItem from "./FeedPhotoItem";
import style from "./FeedPhotos.module.css";

function FeedPhotos({ user, setModalPhoto }) {
  const { FetchPhotos, photos, data } = useContext(userContexto);

  useEffect(() => {
    const total = 3;

    FetchPhotos({ page: 1, total: 90, user: user });
  }, [user]);

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
