import { useContext } from "react";
import useForm from "../../Hooks/useForm";
import { userContexto } from "../../UserContext";
import Button from "../Form/Button";
import Input from "../Form/Input";

function CreateLogin() {
  const username = useForm();
  const email = useForm();
  const password = useForm();

  const { setLoading, loading, UserCreate, UserLogin } =
    useContext(userContexto);

  const info = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  const infoLogin = {
    username: username.value,
    password: password.value,
  };

  async function HandleSubmit(e) {
    e.preventDefault();
    try {
      await UserCreate(info);
      await UserLogin(infoLogin);
    } catch (err) {
      console.log("Erro no Handle");
    }
  }

  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form>
        <Input label="Usuário" type="text" name="username" {...username} />

        <Input label="E-mail" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button onClick={HandleSubmit}> Cadastrar </Button>
      </form>
    </div>
  );
}

export default CreateLogin;
