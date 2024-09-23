import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import BlogDetail from "../../components/Blog/BlogDetail";
import Filter from "../../components/Blog/Sidebar/filter";

const SingleBlog = () => {
  const pageid = useLocation();
  return (
    <div>
      <Breadcrumbs pageroute={pageid.pathname} />
      <div className="px-8 md:px-16 lg:px-32 min-h-screen flex flex-row gap-2 mt-4">
        <div className="w-2/3">
          <BlogDetail />
        </div>
        <div className="w-1/3">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
