import { Navigate, Route, Routes } from "react-router-dom";
import CreateLogin from "./CreateLogin";
import ForgotPassword from "./ForgotPassword";
import LoginForm from "./LoginForm";
import ResetPassword from "./ResetPassword";
import { userContexto } from "../../UserContext";
import { useContext } from "react";
import style from "./Login.module.css";

function Login() {
  const { login } = useContext(userContexto);

  if (login === true) {
    <Navigate to="/conta" />;
  }
  return (
    <div className={style.login}>
      <div className={style.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/create" element={<CreateLogin />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Routes>
      </div>
    </div>
  );
}

export default Login;
