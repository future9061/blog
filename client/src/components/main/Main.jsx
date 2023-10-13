import React from "react";
import Post from "./Post";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 3%;
`;

function Main(props) {
  return (
    <Container>
      <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post /> <Post />
      <Post />
    </Container>
  );
}

export default Main;
