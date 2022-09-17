// import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom/client'; // react v18 버전용
import ReactDOM from "react-dom"; // react v17 버전용
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
