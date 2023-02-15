import { useContext, useEffect, useState } from "react";
import { userContexto } from "../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import style from "./PhotoComments.module.css";

function PhotoComments(props) {
  const { login, photo } = useContext(userContexto);

  console.log(photo);

  const [comments, setComments] = useState();

  return (
    <>
      {/* <ul className={style.comment}>
        {comments?.map((item) => {
          return (
            <li key={item.comment_ID}>
              <b>{item.comment_author}: </b>
              <span>{item.comment_content} </span>
            </li>
          );
        })}
      </ul> */}
      {login && <PhotoCommentsForm id={props.id} comments={`props.comments`} />}
      <h1>{props.comments}</h1>
    </>
  );
}

export default PhotoComments;
