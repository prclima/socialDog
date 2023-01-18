import { NavLink, useLocation } from "react-router-dom";
import UserHeaderNav from "./UserHeaderNav";
import style from "./UserHeader.module.css";
import { useEffect, useState } from "react";

function UserHeader() {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/conta/estatisticas") {
      setTitle("Estatísticas");
      console.log(title);
    }
    if (location.pathname === "/conta/postar") {
      setTitle("Poste sua foto");
    }
    if (location.pathname === "/conta") {
      setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <header className={style.header}>
      <h1 className="title"> {title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
