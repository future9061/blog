import styled from "styled-components";

const WriteDiv = styled.div`

  width:80%;
  margin:0px auto 20px ;
  display:flex;
  justify-content:end;

  >button{
    display:flex;
    padding:8px;
    background:#fff;
    font-weight:600;
    gap:1px;
    transition:0.1s;

    >.pen{
      transform:translateY(2px) rotate(45deg);
    }

    &:hover{
      background:#BDD5D0;
      color:#fff;
    }
  }
`

export default WriteDiv;