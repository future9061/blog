import styled from "styled-components";

const Item = styled.div`
  width: 20%;
  cursor: pointer;
  background: #fff;
  transition: 0.1s;
  margin-bottom:30px;

  &:hover {
    box-shadow: 0px 0px 5px 1px #bdd5d0;
    transform: translateY(-5px);
  }
  > .img-wrap {
    width: 100%;
  }
  > div {
    > section {
      padding: 10px;
      > h6 {
        font-size: 17px;
        margin-bottom: 5px;
      }
      > p {
        font-size: 14px;
        margin-bottom: 30px;
      }
      > small {
        font-size: 11px;
        color: #a4a9a8;
      }
    }
    > div {
      border-top: 1px solid #a4a9a8;
      padding: 10px 5px;
      display: flex;
      gap: 10px;
      align-items: center;

      > div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        overflow: hidden;
      }
      > p {
        font-size: 11px;
        text-wrap: nowrap;
      }
    }
  }
`;

export default Item