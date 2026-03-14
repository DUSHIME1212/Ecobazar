import { populartags } from "../../utils/utils"

const Populartag = () => {
  return (
    <div className="w-full">
        <div className="flex w-full flex-row flex-wrap gap-2">
            {
                populartags.map((items,i) => (
                    <span key={i} className="rounded-full text-xs font-medium bg-gray-50 text-gray-600 hover:bg-[#2C742F] hover:text-white transition-all duration-300 cursor-pointer px-4 py-2 border border-gray-100">
                      {items}
                    </span>
                ))
            }
        </div>
    </div>
  )
}

export default Populartag