import { Outlet } from "react-router";
import { Header } from "@/components/header";

export const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};
