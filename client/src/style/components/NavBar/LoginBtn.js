import styled from "styled-components";

const Button = styled.button`
  border-radius: 20px;
  background: black;
  color: #fff;
  font-weight: 600;
  padding: 7px;
  margin-left: 20px;
  text-wrap: nowrap;
  letter-spacing: 1px;
  &:hover {
    background: #fff;
    color: black;
  }
`;

export default Button