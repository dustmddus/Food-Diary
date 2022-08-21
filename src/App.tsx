import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components";
import { MainPage } from "./pages";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
