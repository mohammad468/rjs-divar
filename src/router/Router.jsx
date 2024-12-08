import { useQuery } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import { getProfile } from "src/services/user";

import PageNotFound from "pages/404";
import AdminPage from "pages/AdminPage";
import AuthPage from "pages/AuthPage";
import DashboardPage from "pages/DashboardPage";
import HomePage from "pages/HomePage";

function Router() {
  const { data, error, isLoading, isError, isFetching } = useQuery(["profile"], getProfile);

  if (isLoading && isFetching) {
    return <h1>loading...</h1>;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
