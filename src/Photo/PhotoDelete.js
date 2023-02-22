import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContexto } from "../UserContext";
import style from "./PhotoDelete.module.css";

function PhotoDelete({ id }) {
  const { PhotoDelete } = useContext(userContexto);
  const navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    await PhotoDelete(id);

    window.location.reload();
  }
  return (
    <>
      <button onClick={handleClick} className={style.delete}>
        Deletar
      </button>
    </>
  );
}

export default PhotoDelete;
