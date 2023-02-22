import { useContext, useEffect, useRef, useState } from "react";
import { userContexto } from "../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import style from "./PhotoComments.module.css";
import axios from "axios";

function PhotoComments({ comments, id }) {
  const { PhotoGet, login, photo, count } = useContext(userContexto);

  const [comment, setComment] = useState({
    comments: ["Sem comentários ainda :/"],
  });

  useEffect(() => {
    setComment(comments);
  }, [comments, count]);

  const commentsSection = useRef(null);

  useEffect(() => {
    commentsSection.current.scrollTop = 20000000;
  }, [comments, count, comment]);
  return (
    <>
      <ul ref={commentsSection} className={style.comment}>
        {comment.comments.map((item) => {
          return (
            <li key={item.comment_ID}>
              <b>{item.comment_author}: </b>
              <span>{item.comment_content} </span>
            </li>
          );
        })}
      </ul>
      {login && (
        <PhotoCommentsForm id={id} setComment={setComment} comment={comment} />
      )}
    </>
  );
}

export default PhotoComments;
