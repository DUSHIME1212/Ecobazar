import { useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import SideBar from "./SideBar";
import PropTypes from "prop-types";

const DashboardLayout = ({ children, title }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumbs pageroute={location.pathname} />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/4">
          <SideBar />
        </aside>
        <main className="w-full lg:w-3/4">
          {title && <h1 className="text-2xl font-medium mb-6">{title}</h1>}
          {children}
        </main>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default DashboardLayout;
