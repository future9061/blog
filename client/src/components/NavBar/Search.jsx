import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Form = styled.form`
  border-radius: 20px;
  background: #fff;
  padding: 5px;
  position: relative;
  &:hover {
    box-shadow: 0px 0px 5px 1px #bdd5d0;
  }
  > input {
    padding: 2px;
    width: 85%;
  }
  > span {
    padding: 3px 5px;
    border-radius: 50%;
    position: absolute;
    right: 2px;
    top: 2px;
    cursor: pointer;
    color: #516964;
    &:hover {
      background: #c6dbda;
      color: #fff;
    }
  }
`;

function Search() {
  return (
    <Form>
      <input />
      <span>
        <BsSearch />
      </span>
    </Form>
  );
}

export default Search;
