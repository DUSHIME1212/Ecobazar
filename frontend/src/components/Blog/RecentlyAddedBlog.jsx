import { InstagramPost } from "../../utils/utils"
import BlogSmallCard from "./BlogSmallCard"

const RecentlyAddedBlog = () => {
  return (
    <div className="w-full">
        <div className="flex flex-col gap-4">
            {
                InstagramPost.slice(0,3).map((items,i) => (
                    <BlogSmallCard key={i} />
                ))
            }
        </div>
    </div>
  )
}

export default RecentlyAddedBlog