import React from "react";
import LoginBtn from "./LoginBtn";
import Search from "./Search";
import Logo from "./Logo";
import Wrapper from "../../style/components/NavBar/NavBar";

function NavBar() {
  return (
    <Wrapper>
      <nav>
        <div>
          <Logo />
          <div>
            <Search />
            <LoginBtn />
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}

export default NavBar;
