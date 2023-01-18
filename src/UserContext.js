import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const userContexto = createContext();

export function UserLogica({ children }) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [photo, setPhoto] = useState();
  const [clickPhoto, setClickPhoto] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      const token = await window.localStorage.getItem("token");

      if (token) {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        try {
          setError(null);
          setLoading(true);
          const response = await axios.post(
            "https://dogsapi.origamid.dev/json/jwt-auth/v1/token/validate",
            null,
            config
          );
          await GetUser();
          navigate("/conta");
        } catch (err) {
          UserLogout();
          throw new Error("Token Inválido");
        } finally {
          setLoading(false);
          console.log("acabou autoLogin");
        }
      } else {
        navigate("/login");
      }
    }
    autoLogin();
  }, []);

  async function GetUser() {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const response = await axios.get(
        "https://dogsapi.origamid.dev/json/api/user",
        config
      );

      setData(response.data);
      setLogin(true);
    } catch (err) {
      console.log(err);
    }
  }

  async function UserLogin(infos) {
    try {
      setError(null);
      setLoading(true);

      const response = await axios.post(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        infos
      );

      window.localStorage.setItem("token", response.data.token);
      GetUser();
      navigate("/conta");
    } catch (err) {
      setError("Erro Login");
      console.log(err);
    } finally {
      setLoading(false);
      console.log("acabou UserLogin");
    }
  }

  async function UserLogout() {
    try {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  async function UserCreate(infos, infoAuto) {
    try {
      setError(null);
      setLoading(true);

      const response = await axios.post(
        "https://dogsapi.origamid.dev/json/api/user",
        infos
      );
      console.log(response);
      UserLogin(infoAuto);
      navigate("/conta");
    } catch (err) {
      setError("Erro Login");
      console.log(err);
    } finally {
      setLoading(false);
      console.log("acabou UserCreate");
    }
  }

  async function PhotoPost(body) {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    setLoading(true);
    try {
      const response = await axios.post(
        "https://dogsapi.origamid.dev/json/api/photo",
        body,
        config
      );

      await setData(response.data);

      navigate("/conta");
    } catch (err) {
      console.log(err);
    } finally {
      console.log("acabou o photoPost");
      setLoading(false);
    }
  }

  async function FetchPhotos({ page, total, user }) {
    try {
      const response = await axios.get(
        `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=${total}&_user=${user}`
      );

      setPhotos(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("acabou FetchPhotos");
    }
  }

  async function PhotoGet(id) {
    try {
      console.log(id);
      const response = await axios.get(
        `https://dogsapi.origamid.dev/json/api/photo/?${id}`
      );

      setPhoto(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("acabou PhotoGet");
    }
  }

  return (
    <userContexto.Provider
      value={{
        UserLogin,
        data,
        UserLogout,
        loading,
        login,
        UserCreate,
        PhotoPost,
        FetchPhotos,
        photos,
        PhotoGet,
        photo,
        setClickPhoto,
        clickPhoto,
      }}
    >
      {children}
    </userContexto.Provider>
  );
}
