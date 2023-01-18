import style from "./UserPhotoPost.module.css";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../Hooks/useForm";
import { useContext, useEffect, useState } from "react";
import { userContexto } from "../../UserContext";
import { useNavigate } from "react-router-dom";

function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();
  const [img, setImg] = useState({});
  const navigate = useNavigate();
  const { PhotoPost, loading, data, postCheck } = useContext(userContexto);

  async function HandleSubmit(e) {
    e.preventDefault();
    const formCreate = new FormData();
    formCreate.append("img", img.raw);
    formCreate.append("nome", nome.value);
    formCreate.append("peso", peso.value);
    formCreate.append("idade", idade.value);

    PhotoPost(formCreate);
  }

  function HandleImgChange(e) {
    setImg({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  }

  return (
    <div className={`${style.PhotoPost} animeLeft`}>
      <form onSubmit={HandleSubmit}>
        <Input type="text" name="nome" label="Nome" {...nome} />
        <Input type="number" name="peso" label="Peso" {...peso} />
        <Input type="number" name="idade" label="Idade" {...idade} />
        <input type="file" name="img" id="img" onChange={HandleImgChange} />
        {loading ? (
          <Button disabled={true}>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
      </form>
      <div>
        {img.preview && (
          <div
            className={style.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          >
            {" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserPhotoPost;
