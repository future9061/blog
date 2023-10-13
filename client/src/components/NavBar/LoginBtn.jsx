import React, { useEffect, useState } from "react";
import Button from "../../style/components/NavBar/LoginBtn";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/userSlice";
import LogoutBtn from "./LogoutBtn";

function LoginBtn() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        const userData = {
          displayName: data.user.displayName,
          uid: data.user.uid,
          photoURL: data.user.photoURL,
        };
        dispatch(userLogin(userData));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      {user.uid ? (
        <Button onClick={(e) => handleGoogleLogin(e)}>로그인</Button>
      ) : (
        <div>
          로그인한 상태
          <LogoutBtn />
        </div>
      )}
    </>
  );
}

export default LoginBtn;
