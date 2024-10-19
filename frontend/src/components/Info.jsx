import { ChatCentered, Tag, User } from "@phosphor-icons/react";

const Info = () => {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <div className="flex items-center gap-2 p-2 w-fit">
          <span>
            <Tag className="opacity-60" />
          </span>
          <span>Food</span>
        </div>
        <div className="flex items-center gap-2 p-2 w-fit">
          <span>
            <User className="opacity-60" />
          </span>
          <span>By Admin</span>
        </div>
        <div className="flex items-center gap-2 p-2 w-fit">
          <span>
            <ChatCentered className="opacity-60" />
          </span>
          <span>65 Comments</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
