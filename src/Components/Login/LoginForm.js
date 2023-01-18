import style from "./LoginForm.module.css";
import styleBtn from "../Form/Button.module.css";
import { useContext, useEffect } from "react";
import useForm from "../../Hooks/useForm";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { userContexto } from "../../UserContext";
import { Link } from "react-router-dom";

function LoginForm() {
  const username = useForm();
  const password = useForm();
  const { UserLogin, loading, error } = useContext(userContexto);

  const infos = { username: username.value, password: password.value };

  async function HandleSubmit(e) {
    e.preventDefault();
    UserLogin(infos);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={style.form}>
        <Input label="Usuario" type="text" name="userName" {...username} />
       *
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled={loading} onClick={HandleSubmit}>
            Carregando...
          </Button>
        ) : (
          <Button disabled={loading} onClick={HandleSubmit}>
            Entrar
          </Button>
        )}
      </form>
      <Link className={style.esqueceu} to="/login/esqueceu">
        Esqueceu a senha?
      </Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}>Cadastre-se</h2>
        <p>Não possui conta?</p>
        <Link className={styleBtn.button} to="/login/create">
          Cadastre-se
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
