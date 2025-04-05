import { useQuery } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (data?.data?.role === "ADMIN") setIsAdmin(true);
  }, [data]);

  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/dashboard" element={isAdmin ? <DashboardPage /> : <Navigate to="/auth" />} />
      <Route path="/me" element={data ? <MePage /> : <Navigate to="/auth" />} />
      <Route path="/create-ad" element={data ? <AdPage /> : <Navigate to="/auth" />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
