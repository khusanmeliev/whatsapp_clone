import styled from "styled-components";

export const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,

  WrapperTop: styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: #202c33;

    div {
      width: 90%;
      display: flex;
      align-items: center;
      gap: 30px;
      color: #d1d7db;
      margin: 10px;

      svg {
        font-size: 25px;
      }

      h1 {
        font-size: 20px;
      }
    }
  `,

  WrapperBottom: styled.div`
    width: 100%;
    height: 80%;
    background-color: #111b21;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
  `,

  Image: styled.div`
    width: 80%;
    height: 30%;
  `,

  Title: styled.div`
    width: 80%;
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    color: white;
  `,

  Text: styled.div`
    width: 80%;
    text-align: center;
    font-size: 14px;
    color: #8696a0;
  `,

  Button: styled.button`
    width: 220px;
    height: 40px;
    background-color: #00a884;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 13px;
    letter-spacing: 1px;
  `,
};
