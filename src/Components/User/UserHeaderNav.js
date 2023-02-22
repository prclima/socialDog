import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { userContexto } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import { useNavigate } from "react-router-dom";
import style from "./UserHeaderNav.module.css";
import useMidia from "../../Hooks/useMidia";

function UserHeaderNav() {
  const { setData, setLogin } = useContext(userContexto);
  const navigate = useNavigate();

  const mobile = useMidia(`(max-width: 40rem)`);

  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${style.mobileButton} ${
            mobileMenu && style.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? style.navMobile : style.nav} ${
          mobileMenu && style.navMobileActive
        }`}
      >
        <NavLink to="/conta">
          <MinhasFotos />
          {mobile && `Minhas Fotos`}
        </NavLink>

        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && `Estatísticas`}
        </NavLink>

        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && `Adicionar Foto`}
        </NavLink>

        <button
          type="submit"
          onClick={() => {
            setData(null);
            setLogin(false);
            window.localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          <Sair />
          {mobile && `Sair`}
        </button>
      </nav>
    </>
  );
}

export default UserHeaderNav;
