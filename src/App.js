import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { UserLogica } from "./UserContext";
import User from "./Components/User/User";
import ProtectedRoute from "./Components/ProtectedRoute";
import UserProfile from "./Components/User/UserProfile";

function App() {
  return (
    <>
      <UserLogica>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route
            path="conta/*"
            element={
              <ProtectedRoute>
                {" "}
                <User />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/perfil/:user" element={<UserProfile />} />
        </Routes>
        <Footer />
      </UserLogica>
    </>
  );
}

export default App;
