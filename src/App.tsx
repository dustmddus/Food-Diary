import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components";
import { MainPage } from "./pages";
import Footer from "./components/Footer/Footer";
import PostListPage from "./pages/PostListPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/postList" element={<PostListPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
