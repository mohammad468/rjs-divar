import { useQuery } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";

import { getProfile } from "src/services/user";

import PageNotFound from "pages/404";
import AdminPage from "pages/AdminPage";
import AuthPage from "pages/AuthPage";
import DashboardPage from "pages/DashboardPage";
import HomePage from "pages/HomePage";
import Loader from "src/components/modules/Loader";

function Router() {
  const { data, error, isLoading, isError, isFetching } = useQuery(["profile"], getProfile);

  if (isLoading) return <Loader/>;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={data ? <DashboardPage /> : <Navigate to="/auth"/>} />
      <Route path="/auth" element={data ? <Navigate to="/dashboard"/> : <AuthPage />} />
      <Route path="/admin" element={(data && data.data.role === "ADMIN") ? <AdminPage /> : <Navigate to="/" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
