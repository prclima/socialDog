import { useState } from "react";
import { ReactComponent as Enviar } from "../Assets/enviar.svg";
import { useContext } from "react";
import { userContexto } from "../UserContext";

function PhotoCommentsForm(props) {
  const [comment, setComment] = useState("");

  const { CommentPost } = useContext(userContexto);

  async function HandleSubmit(e) {
    e.preventDefault();
    CommentPost(props.id, { comment });
  }

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <textarea
          id="comment"
          name="comment"
          placeholder="comentário"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />

        <button>
          <Enviar />
        </button>
      </form>
    </>
  );
}

export default PhotoCommentsForm;
