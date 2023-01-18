import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { userContexto } from "../UserContext";
import { useContext } from "react";

function Header() {
  const { data, UserLogout } = useContext(userContexto);

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={style.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={style.login} to="/login">
            Login/Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
