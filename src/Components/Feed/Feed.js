import { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  // useEffect(() => {
  //   let wait = false;

  //   window.addEventListener("wheel", infiniteScroll);
  //   window.addEventListener("scroll", infiniteScroll);
  //   function infiniteScroll() {
  //     if (infinite) {
  //       const scroll = window.scrollY;
  //       const height = document.body.offsetHeight - window.innerHeight;

  //       if (scroll > height * 0.75 && !wait) {
  //         setPages((pages) => [...pages, pages.length + 1]);
  //         console.log(`length`, pages);
  //         wait = true;
  //         // setTimeout(() => {
  //         //   wait = false;
  //         // }, 500);
  //       }
  //     }

  //     return () => {
  //       window.removeEventListener("wheel", infiniteScroll);
  //       window.removeEventListener("scroll", infiniteScroll);
  //     };
  //   }
  // }, []);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photos={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      <FeedPhotos
        user={user}
        setModalPhoto={setModalPhoto}
        setInfinite={setInfinite}
      />
    </div>
  );
}

export default Feed;
