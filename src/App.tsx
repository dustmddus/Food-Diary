import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components";
import { MainPage } from "./pages";
import Footer from "./components/Footer/Footer";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostCreatePage from "./pages/PostCreatePage";
import TeamCreatePage from "./pages/TeamCreatePage";
import TeamDetailPage from "./pages/TeamDetailPage";
import PersonalDetailPage from "./pages/PersonalDetailPage";
import ProposalPage from "./pages/ProposalPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/postList" element={<PostListPage />} />
        <Route path="/post/detail/:ID" element={<PostDetailPage />} />
        <Route path="/post/create" element={<PostCreatePage />} />
        <Route path="/team/create" element={<TeamCreatePage />} />
        <Route path="/team/profile/:ID" element={<TeamDetailPage />} />
        <Route path="/personal/profile/:ID" element={<PersonalDetailPage />} />
        <Route path="/proposal" element={<ProposalPage />} />

        {/* <Route path="/team/detail/:ID" element={<TeamDetailPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
