import { ArrowRight, ChatCentered, Tag, User } from "@phosphor-icons/react"

const LatestNewHolder = () => {
  return (
    <div className="w-full lg:w-1/3 min-h-96 group relative p-2 flex flex-col gap-4 hover:shadow-md duration-700 rounded-xl">
        <img src="/news/Image.png" alt="img" className="w-full rounded-xl" />
        <div className="w-full p-4 flex flex-col gap-2">
            <div className="flex flex-row gap-2">
                <div className="flex items-center gap-2 p-2 w-fit">
                    <span><Tag className="opacity-60"/></span>
                    <span>Food</span>
                </div>
                <div className="flex items-center gap-2 p-2 w-fit">
                    <span><User className="opacity-60"/></span>
                    <span>By Admin</span>
                </div>
                <div className="flex items-center gap-2 p-2 w-fit">
                    <span><ChatCentered className="opacity-60"/></span>
                    <span>65 Comments</span>
                </div>
            </div>
            <p className="group-hover:text-green-800">Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
            <button className="flex flex-row gap-4 items-center bg-transparent text-green-500 p-2">
                <span>Read More</span>
                <ArrowRight size={24}/>
            </button>
        </div>
    </div>
  )
}

export default LatestNewHolder