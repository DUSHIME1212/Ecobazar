import { InstagramPost } from "../../utils/utils"
import BlogSmallCard from "./BlogSmallCard"

const RecentlyAddedBlog = () => {
  return (
    <div className="p-2 bg-white rounded-xl w-full">
        <h3 className="ml-2 font-bold text-lg">Recently Added</h3>
        <div className="flex w-full mt-2 flex-row gap-2 flex-wrap">
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