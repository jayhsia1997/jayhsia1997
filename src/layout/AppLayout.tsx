import React from "react";
import { Outlet } from "react-router";
import Footer from "./AppFooter.tsx";
import AppHeader from "./AppHeader.tsx";

const LayoutContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const AppLayout: React.FC = () => {
  return <LayoutContent />;
};

export default AppLayout;
