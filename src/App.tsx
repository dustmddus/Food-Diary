import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components";
import { MainPage } from "./pages";
import Footer from "./components/Footer/Footer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
const PostListPage = lazy(() => import("./pages/PostListPage"));
const PostDetailPage = lazy(() => import("./pages/PostDetailPage"));
const PostCreatePage = lazy(() => import("./pages/PostCreatePage"));
const TeamCreatePage = lazy(() => import("./pages/TeamCreatePage"));
const TeamDetailPage = lazy(() => import("./pages/TeamDetailPage"));
const PersonalDetailPage = lazy(() => import("./pages/PersonalDetailPage"));
const ProposalPage = lazy(() => import("./pages/ProposalPage"));

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
          path="/proposal"
          element={<PrivateRoute component={ProposalPage} />}
        />

        {/* <Route path="/team/detail/:ID" element={<TeamDetailPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
