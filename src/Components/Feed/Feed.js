import { useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

function Feed() {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photos={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
}

export default Feed;
