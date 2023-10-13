import styled from "styled-components";

const ProfileDiv = styled.div`
display:flex;
cursor:pointer;
align-items:center;
margin-left:5px;
gap:5px;
position:relative;
padding:10px;
border-radius:15px;

&:hover{
  box-shadow: 0px 0px 5px 1px #A4A9A8;
}
  >div{
    width:30px;
    height:30px;
    border-radius:50%;
    overflow:hidden;
  }
  >p{
    text-wrap:nowrap;
    >span{
      font-weight:700;
      color:#516964;
    }
  }
`

export default ProfileDiv