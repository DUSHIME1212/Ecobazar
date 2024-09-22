import { ArrowRight, MessengerLogo, Tag, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="w-[48%] h-fit max-h-96 min-h-96 relative bg-white rounded-xl p-2">
      <img
        src="/instagram/Instagram Post.png"
        alt=""
        className="h-56 w-full object-cover rounded-xl"
      />
      <div className="flex items-center flex-col absolute bg-white left-4 z-20 top-40 rounded-xl px-4 justify-center min-w-16 min-h-16">
        <h1>18</h1>
        <span>Nov</span>
      </div>
      <div className="flex gap-2 mt-2 flex-col justify-between">
        <div className="flex flex-row items-center">
          <span className="flex items-center gap-2 p-2">
            <Tag size={12} />
            <p className="text-sm">Food</p>
          </span>
          <span className="flex items-center gap-2 p-2">
            <User size={12} />
            <p className="text-sm">By Admin</p>
          </span>
          <span className="flex items-center gap-2 p-2">
            <MessengerLogo size={12} />
            <p className="text-sm">65 Comments</p>
          </span>
        </div>
        <p className="px-2">
          Curabitur porttitor orci eget neque accumsan venenatis. Nunc
          fermentum.
        </p>
        <Link to={""} className="flex gap-2 items-center">
          <span>Read more</span>
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
