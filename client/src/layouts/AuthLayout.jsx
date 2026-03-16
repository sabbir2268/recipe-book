import { Outlet } from "react-router";
import { Theme } from "../components/Theme";
const AuthLayout = () => {
  return (
    <>
      <Theme></Theme>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default AuthLayout;
