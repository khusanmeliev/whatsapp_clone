import React from "react";
import { S } from "./styles";
import { FaEllipsisV } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { chats } from "../../../mock/chats/contacts";
import ClickChat from "../../clickChat/ClickChat";

const Home = () => {
  const handleShowMessages = () => {};

  return (
    <S.Wrapper>
      <S.Navbar>
        <ul>
          <S.ProfilePhoto src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg" />
          <div>
            <li>
              <FaEllipsisV />
            </li>
            <li>
              <FaEllipsisV />
            </li>
            <li>
              <FaEllipsisV />
            </li>
          </div>
        </ul>
      </S.Navbar>

      <S.SearchBar>
        <div>
          <AiOutlineSearch />
          <S.Input type="search" placeholder="Search or start new chat" />
        </div>
        <FaEllipsisV />
      </S.SearchBar>

      <S.Chats>
        {chats.map((profile) => (
          <S.ChatsBox key={profile.id} onClick={handleShowMessages}>
            <S.ProfileImg>
              <img src={profile.photo} alt="img" />
            </S.ProfileImg>
            <S.ProfileDetails>
              <S.PorfileName>
                {profile.name} <div>{profile.last_seen}</div>
              </S.PorfileName>
              <S.Message>{profile.message}</S.Message>
            </S.ProfileDetails>
          </S.ChatsBox>
        ))}
      </S.Chats>
    </S.Wrapper>
  );
};

export default Home;
