import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { useContext } from "react";
import { userContexto } from "../../UserContext.js";

function User() {
  const { data } = useContext(userContexto);

  return (
    <div className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.data.ID} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </div>
  );
}

export default User;
