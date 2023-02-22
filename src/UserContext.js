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
  const [comentarioAPI, setComentarioAPI] = useState(null);
  const [count, setCount] = useState(0);

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
            "http://dogapi.test/json/jwt-auth/v1/token/validate",
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
        "http://dogapi.test/json/api/user",
        config
      );

      setData(response.data);
      setLogin(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function UserLogin(infos) {
    try {
      setError(null);
      setLoading(true);

      const response = await axios.post(
        "http://dogapi.test/json/jwt-auth/v1/token",
        infos
      );

      window.localStorage.setItem("token", response.data.token);
      await GetUser();
      navigate("/conta");
    } catch (err) {
      setError("Erro Login");
      console.log(err);
    } finally {
      setLoading(false);
      console.log("acabou UserLogin");
    }
  }

  function UserLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }

  async function UserCreate(infos, infoAuto) {
    try {
      setError(null);
      setLoading(true);

      const response = await axios.post(
        "http://dogapi.test/json/api/user",

        infos
      );

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
        "http://dogapi.test/json/api/photo",
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
        `http://dogapi.test/json/api/photo/?_page=${page}&_total=${total}&_user=${user}`
      );
      setPhotos(response.data);
      setPhoto({
        photo: {
          photo: "Sistema",
        },
        comment_author: ["Sistema"],
        comment_ID: [0],
        comments: ["sem comentários ainda ;/"],
      });
    } catch (err) {
      console.log(err);
    } finally {
      console.log("acabou FetchPhotos");
    }
  }

  async function PhotoGet(id) {
    console.log("photoGt start");

    try {
      const response = await axios.get(
        `http://dogapi.test/json/api/photo/${id}`
      );

      setPhoto(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("acabou PhotoGet");
    }
  }

  async function CommentPost(id, { commentSend }) {
    const body = { comment: commentSend };
    setCount(10);
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.post(
        `http://dogapi.test/json/api/comment/${id}`,
        body,
        config
      );

      PhotoGet(id);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("acabou CommentPost");
    }
  }

  async function PhotoDelete(id) {
    console.log("comecou Delete");
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      await axios.delete(
        `http://dogapi.test/json/api/photo/${id}`,

        config
      );
    } catch (err) {
      console.log(err);
    } finally {
      console.log("acabou Delete");
    }
  }

  return (
    <userContexto.Provider
      value={{
        setData,
        UserLogin,
        setLogin,
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
        setPhoto,
        setClickPhoto,
        clickPhoto,
        comentarioAPI,
        CommentPost,
        count,
        setCount,
        PhotoDelete,
      }}
    >
      {children}
    </userContexto.Provider>
  );
}
