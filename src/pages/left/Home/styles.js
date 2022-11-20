import styled from "styled-components";

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    background-color: #111b21;
    display: flex;
    align-items: center;
    flex-direction: column;
  `,

  Navbar: styled.div`
    width: 100%;
    height: 10%;
    background-color: #202c33;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      width: 80%;
      height: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        gap: 10px;

        li {
          list-style-type: none;
          font-size: 20px;
          color: #d1d7db;
        }
      }
    }
  `,

  ProfilePhoto: styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
  `,

  SearchBar: styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;

    div {
      width: 85%;
      height: 35px;
      background-color: #202c33;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-radius: 8px;
      color: #d1d7db;
    }

    svg {
      font-size: 20px;
      color: #d1d7db;
    }
  `,

  Input: styled.input`
    width: 65%;
    border: none;
    outline: none;
    background-color: inherit;
  `,

  Chats: styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  `,

  ChatsBox: styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #667781;
    cursor: pointer;
  `,

  ProfileImg: styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  `,
  ProfileDetails: styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
  `,

  PorfileName: styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    div {
      margin: 10px;
      font-size: 13px;
      color: #667781;
    }
  `,

  Message: styled.div`
    width: 100%;
    height: 50%;
    color: #667781;
  `,
};
