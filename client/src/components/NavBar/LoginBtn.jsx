import React from "react";
import BlackBtn from "../../style/components/NavBar/BlackBtn";
import { auth } from "../../firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/userSlice";
import Profile from "./Profile";

function LoginBtn() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        signInWithPopup(auth, provider).then((data) => {
          const userData = {
            displayName: data.user.displayName,
            uid: data.user.uid,
            photoURL: data.user.photoURL,
          };
          dispatch(userLogin(userData));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {user?.uid ? (
        <Profile />
      ) : (
        <BlackBtn onClick={(e) => handleGoogleLogin(e)}>로그인</BlackBtn>
      )}
    </>
  );
}

export default LoginBtn;
