import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login/Login";
import Dashboard from "../components/Dashboard";
import Signin from "../components/auth/Signin/Signin";
import { useAuthStore } from "../components/hooks/useAuthStore.js";
import { useEffect } from "react";

const AppRouter = () => {
  const { loggedStatus, viewLogin } = useSelector((state) => state.signUp);
  const { checkToken } = useAuthStore();
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <Routes>
      {loggedStatus === false ? (
        viewLogin ? (
          <>
            <Route path="/auth/login/*" element={<Login />} />
            <Route path="/*" element={<Navigate to="/auth/login" />} />
          </>
        ) : (
          <>
            <Route path="/auth/login/*" element={<Signin />} />
            <Route path="/*" element={<Navigate to="/auth/login" />} />
          </>
        )
      ) : (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
