import { useQuery } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";

import { getProfile } from "src/services/user";

import PageNotFound from "pages/404";
import AuthPage from "pages/AuthPage";
import DashboardPage from "pages/DashboardPage";
import HomePage from "pages/HomePage";
import Loader from "src/components/modules/Loader";
import AdPage from "src/pages/AdPage";
import MePage from "src/pages/MePage";

function Router() {
  const { data, error, isLoading, isError, isFetching } = useQuery(["profile"], getProfile);

  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={data?.data?.role === "ADMIN" ? <DashboardPage /> : <AuthPage />} />
      <Route path="/me" element={data ? <MePage /> : <AuthPage />} />
      <Route path="/create-ad" element={data ? <AdPage /> : <AuthPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
