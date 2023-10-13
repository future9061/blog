import styled from "styled-components";

const Form = styled.form`
  position: relative;
  > input {
    border-radius: 20px;
    background: #fff;
    padding: 10px;

    margin: 0px 20px 0px 0px;
    &:hover {
      box-shadow: 0px 0px 5px 1px #bdd5d0;
    }
    &:focus {
      box-shadow: 0px 0px 5px 1px #bdd5d0;
    }
  }
  > span {
    font-size:20px;
    padding: 4px 6px;
    position: absolute;
    border-radius:50%;
    left: 74%;
    top: 1px;
    cursor: pointer;
    color: #516964;
    background: #c6dbda;
    color: #fff;
    &:hover {
      color: #516964;
    }
  }
`;

export default Form