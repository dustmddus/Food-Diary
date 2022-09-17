import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer/Footer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PostListPage from "./pages/PostListPage";
import PersonalDetailPage from "./pages/PersonalDetailPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostCreatePage from "./pages/PostCreatePage";
import TeamCreatePage from "./pages/TeamCreatePage";
import TeamDetailPage from "./pages/TeamDetailPage";
import ProposalPage from "./pages/ProposalPage";
import InvitePage from "./pages/InvitePage";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/postList"
          element={<PrivateRoute component={PostListPage} />}
        />
        <Route
          path="/post/detail/:ID"
          element={<PrivateRoute component={PostDetailPage} />}
        />
        <Route
          path="/post/create"
          element={<PrivateRoute component={PostCreatePage} />}
        />
        <Route
          path="/team/create"
          element={<PrivateRoute component={TeamCreatePage} />}
        />
        <Route
          path="/team/profile/:ID"
          element={<PrivateRoute component={TeamDetailPage} />}
        />
        <Route
          path="/personal/profile/:ID"
          element={<PrivateRoute component={PersonalDetailPage} />}
        />
        <Route
          path="/proposal/:ID"
          element={<PrivateRoute component={ProposalPage} />}
        />
        <Route
          path="/invite/:ID"
          element={<PrivateRoute component={InvitePage} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
