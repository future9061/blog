import React from "react";
import { BsSearch } from "react-icons/bs";
import Form from "../../style/components/NavBar/Search";

function Search() {
  return (
    <Form>
      <input placeholder="키워드를 입력해보세요" />
      <span>
        <BsSearch />
      </span>
    </Form>
  );
}

export default Search;
