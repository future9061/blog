import React from "react";
import Post from "./Post";
import WriteBtn from "./WriteBtn";
import Main from "../../style/components/Container/Container";

function Container() {
  return (
    <>
      <WriteBtn />
      <Main>
        <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post />
        <Post />
      </Main>
    </>
  );
}

export default Container;
