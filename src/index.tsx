import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </>
);
