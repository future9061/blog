import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/userSlice";
import { AiOutlinePoweroff } from "react-icons/ai";
import OffBtn from "../../style/components/NavBar/LogoutBtn";

function LogoutBtn() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        console.log("로그아웃 성공");
        dispatch(userLogin(null));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <OffBtn
      onClick={(e) => {
        handleLogout(e);
      }}
    >
      <AiOutlinePoweroff className="logout" />
    </OffBtn>
  );
}

export default React.memo(LogoutBtn);
