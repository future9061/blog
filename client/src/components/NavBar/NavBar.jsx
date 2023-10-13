import React from "react";
import LoginBtn from "./LoginBtn";
import Search from "./Search";
import Logo from "./Logo";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  padding: 20px 0px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  > div {
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;

function NavBar() {
  return (
    <Wrapper>
      <Logo />
      <div>
        <Search />
        <LoginBtn />
      </div>
    </Wrapper>
  );
}

export default NavBar;
