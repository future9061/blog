import React from "react";
import Item from "../../style/components/main/postStyle";

function Post() {
  return (
    <Item>
      <div className="img-wrap">
        <img
          src="https://velog.velcdn.com/images/jungsangu/post/365b32d0-59e4-4767-b9be-72892ede05c7/image.png"
          ait="임시"
        />
      </div>
      <div>
        <section>
          <h6>이미래가 만드는 블로그</h6>
          <p>최대한 빨리 완성해서 이력서에 내야 해</p>
          <small>2023.10.13</small>
        </section>

        <div>
          <div>
            <img
              src="https://velog.velcdn.com/images/tosspayments/post/718ee688-a03a-46f1-b36d-91d2f8d8b225/image.jpeg"
              alt="프로필 사진"
            />
          </div>
          <p>귀여운 곰돌이</p>
        </div>
      </div>
    </Item>
  );
}

export default Post;
