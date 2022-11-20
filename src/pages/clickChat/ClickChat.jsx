import React from "react";
import { S } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";

const ClickChat = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.ProfilePhoto src="" />
        <S.ProfileName>khusanmeliev</S.ProfileName>
        <S.ProfileDetails>
          <li>
            <AiOutlineSearch />
          </li>
          <li>
            <FaEllipsisV />
          </li>
        </S.ProfileDetails>
      </S.Header>
      <S.Messages></S.Messages>
      <S.Footer>
        <S.FooterField>
          <S.Icons>
            <li>
              <BsEmojiSmile />
            </li>
            <li>
              <BsEmojiSmile />
            </li>
          </S.Icons>

          <S.MessageInput placeholder="Type a message" />

          <S.VoiceIcon>
            <MdKeyboardVoice />
          </S.VoiceIcon>
        </S.FooterField>
      </S.Footer>
    </S.Wrapper>
  );
};

export default ClickChat;
