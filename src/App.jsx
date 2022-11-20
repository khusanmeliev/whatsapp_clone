import React from "react";
import { LeftPart, RightPart, Wrapper } from "./App.styles";
import ClickChat from "./pages/clickChat/ClickChat";
import Left from "../src/pages/left/Home/HomeLeft";

const App = () => {
  return (
    <>
      <Wrapper>
        <LeftPart>
          <Left />
          {/* <Community /> */}
        </LeftPart>
        <RightPart>
          <ClickChat />
        </RightPart>
      </Wrapper>
    </>
  );
};

export default App;
