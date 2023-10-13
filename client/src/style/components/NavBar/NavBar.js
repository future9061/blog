import styled from "styled-components";

const Wrapper = styled.div`
  > nav {
    box-shadow: 0px 0px 5px 1px #a4a9a8;
    > div {
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
    }
  }
`;

export default Wrapper