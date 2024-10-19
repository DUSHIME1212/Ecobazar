import { populartags } from "../../utils/utils"

const Populartag = () => {
  return (
    <div className="p-2 bg-white rounded-xl w-full">
        <h3 className="ml-2 font-bold text-lg">Popular Tag</h3>
        <div className="flex w-full mt-2 flex-row gap-2 flex-wrap">
            {
                populartags.map((items,i) => (
                    <span key={i} className="rounded-full hover:ring-1 hover:bg-green-500 duration-700 cursor-pointer hover:text-white ring-green-500 px-4 py-1">{items}</span>
                ))
            }
        </div>
    </div>
  )
}

export default Populartag