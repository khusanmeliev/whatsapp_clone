import React from "react";
import { S } from "./styles";
import { BiArrowBack } from "react-icons/bi";

const Community = () => {
  return (
    <S.Wrapper>
      <S.WrapperTop>
        <div>
          <BiArrowBack />
          <h1>Communities</h1>
        </div>
      </S.WrapperTop>
      <S.WrapperBottom>
        <S.Image></S.Image>
        <S.Title>Introducing communities</S.Title>
        <S.Text>
          Easily organize your related groups and send announcements. Now, your
          communities, like neighborhoods or schools, can have their own space.
        </S.Text>
        <S.Button>START A COMMUNITY</S.Button>
      </S.WrapperBottom>
    </S.Wrapper>
  );
};

export default Community;
