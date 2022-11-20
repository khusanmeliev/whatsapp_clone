import styled from "styled-components";

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,

  Header: styled.header`
    width: 100%;
    height: 10%;
    background-color: #202c33;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  ProfilePhoto: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `,

  ProfileName: styled.div`
    width: 80%;
    color: #d1d7db;
  `,

  ProfileDetails: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;

    li {
      list-style-type: none;
      font-size: 25px;
      margin: 5px;
      color: #d1d7db;
    }
  `,

  Messages: styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    background-image: url("https://wallpaperaccess.com/full/2048343.jpg");
  `,

  Footer: styled.div`
    width: 100%;
    height: 10%;
    background-color: #202c33;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  FooterField: styled.div`
    width: 97%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,

  Icons: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    li {
      list-style-type: none;
      font-size: 25px;
      margin: 5px;
      color: #d1d7db;
    }
  `,

  MessageInput: styled.input`
    width: 80%;
    height: 60%;
    background-color: #2a3942;
    border: none;
    outline: none;
    text-indent: 10px;
    border-radius: 8px;
    color: #d1d7db;
    font-size: 15px;
  `,

  VoiceIcon: styled.div`
    svg {
      font-size: 30px;
      margin: 5px;
      cursor: pointer;
      color: #d1d7db;
    }
  `,
};
