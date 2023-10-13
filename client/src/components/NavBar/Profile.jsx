import React from "react";
import ProfileDiv from "../../style/components/NavBar/Profile";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";

function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <ProfileDiv>
        <div>
          <img src={user?.photoURL} alt={`${user?.displayName}의 사진`} />
        </div>
        <p>
          <span> {user?.displayName} </span>님 환영해요
        </p>
      </ProfileDiv>
      <LogoutBtn />
    </>
  );
}

export default Profile;
