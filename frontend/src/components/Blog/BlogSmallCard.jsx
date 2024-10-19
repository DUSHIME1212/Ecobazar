import { Calendar } from "@phosphor-icons/react"

const BlogSmallCard = () => {
  return (
    <div className="w-full flex items-center cursor-pointer gap-2 p-2">
        <img src="/instagram/Instagram Post-1.png" className="size-16 object-cover rounded-xl bg-gray-200"/>
        <div>
            <h3 className="w-full text-sm font-bold">Curabitur porttitor orci eget nequ accumsan.</h3>
            <span className="flex items-center ">
                <Calendar className="text-green-700" size={16}/>
                <p className="ml-1 text-sm">2022-01-01</p>
            </span>
        </div>
    </div>
  )
}

export default BlogSmallCard