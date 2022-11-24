import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login/Login";
import Dashboard from "../components/Dashboard";
import Signin from "../components/auth/Signin/Signin";

const AppRouter = () => {
  const authStatus = useSelector((state) => state.signUp.status);

  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Signin />} />
        </>
      ) : (
        <Route path="/*" element={<Dashboard />} />
      )}

      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
