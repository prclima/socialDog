import { useState } from "react";
import { ReactComponent as Enviar } from "../Assets/enviar.svg";
import { useContext } from "react";
import { userContexto } from "../UserContext";
import style from "./PhotoCommentsForm.module.css";

function PhotoCommentsForm({ id, setComment, comment }) {
  const [commentSend, setCommentSend] = useState([]);

  const { CommentPost, setCount, PhotoGet, count } = useContext(userContexto);

  async function HandleSubmit(e) {
    e.preventDefault();
    CommentPost(id, { commentSend });
    setCommentSend("");
    setCount(() => count + 1);
  }

  return (
  
    <form className={style.form} onSubmit={HandleSubmit}>
      <textarea
        className={style.textarea}
        id="commentSend"
        name="commentSend"
        placeholder="comentário"
        value={commentSend}
        onChange={(e) => {
          setCommentSend(e.target.value);
        }}
      />

      <button className={style.button}>
        <Enviar />
      </button>
    </form>
  );
}

export default PhotoCommentsForm;
