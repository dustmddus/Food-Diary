import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components";
import { MainPage } from "./pages";
import Footer from "./components/Footer/Footer";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostCreatePage from "./pages/PostCreatePage";
import TeamCreatePage from "./pages/TeamCreatePage";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/postList" element={<PostListPage />} />
        <Route path="/postDetail/:ID" element={<PostDetailPage />} />
        <Route path="/post/create" element={<PostCreatePage />} />
        <Route path="/team/create" element={<TeamCreatePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
