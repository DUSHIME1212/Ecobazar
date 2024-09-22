import { InstagramPost } from "../../utils/utils"

const OurGallery = () => {
  return (
    <div className="p-2 bg-white rounded-xl w-full">
        <h3 className="ml-2 font-bold text-lg">Our Gallery</h3>
        <div className="flex w-full mt-2 flex-row gap-2 flex-wrap">
            {
                InstagramPost.map((items,i) => (
                    <img src={items} key={i} className="rounded-xl w-[23%]" />
                ))
            }
        </div>
    </div>
  )
}

export default OurGallery