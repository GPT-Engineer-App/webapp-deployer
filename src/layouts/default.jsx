import { Outlet } from "react-router-dom";
import InteractiveWindow from "../components/InteractiveWindow";

const Layout = () => {
  return (
    <main className="flex min-h-screen overflow-hidden">
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
      <InteractiveWindow />
    </main>
  );
};

export default Layout;