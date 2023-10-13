import React from "react";

function LogoutBtn(props) {
  const handleLogout = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onClick={(e) => {
        handleLogout(e);
      }}
    >
      LogoutBtn
    </div>
  );
}

export default LogoutBtn;
