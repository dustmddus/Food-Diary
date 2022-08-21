import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import { MainPage } from "./pages";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
