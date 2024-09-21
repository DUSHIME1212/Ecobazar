import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function BlogList() {
  const page = useLocation().pathname.split("/").pop();

  return (
    <div>
      <Breadcrumbs pageroute={page} />
      <div className="px-8 md:px-16 lg:px-32 py-8">
        {/* top */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Blog List</h1>
        </div>
        {/* bottom */}
        <div className="flex">
          <div className="w-1/3 min-h-96">1</div>
          <div className="w-2/3 min-h-96">2</div>
        </div>
      </div>
    </div>
  );
}
