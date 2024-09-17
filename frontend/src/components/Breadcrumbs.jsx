import { CaretRight, House } from "@phosphor-icons/react";
import PropTypes from "prop-types";

const Breadcrumbs = ({ pageroute }) => {
  const pageId = pageroute || 'default';

  return (
    <div
      className="w-full px-8 md:px-16 lg:px-32 py-8 z-0 bg-black text-white relative bg-cover"
      style={{ backgroundImage: `url('/Breadcumps/Breadcrumbs (1).png')` }}
    >
      <div className="bg-gradient-to-r absolute top-0 left-0 size-full from-black/30 to-white/5 z-10" />
      <div className="flex flex-row items-center gap-2 z-20">
        <House className="" />
        <CaretRight />
        <span className="text-sm text-green-500">{pageId}</span>
      </div>
    </div>
  );
};

Breadcrumbs.propTypes = {
  pageroute: PropTypes.object.isRequired, // Change to object to match useParams return type
};

export default Breadcrumbs;
