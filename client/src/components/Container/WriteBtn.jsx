import React from "react";
import { CiPen } from "react-icons/ci";
import WriteDiv from "../../style/components/Container/WriteBtn";

function WriteBtn() {
  return (
    <WriteDiv>
      <button>
        <CiPen className="pen" />
        <p>작성하기</p>
      </button>
    </WriteDiv>
  );
}

export default WriteBtn;
