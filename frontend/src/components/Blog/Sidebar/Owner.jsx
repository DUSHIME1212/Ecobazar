import { Dot } from "@phosphor-icons/react"

const Owner = () => {
  return (
    <div className="flex flex-row items-center gap-2">
        <img src="/avatar/avatarone.jpg" className="size-16 rounded-full" alt="" />
        <div>
            <h3>Cameron Williamson</h3>
            <div className="flex flex-row items-center">
                <p className="text-sm w-fit">4 April, 2021</p>
                <Dot size={24} />
                <p className="text-sm w-fit">6 min read</p>
            </div>
        </div>
    </div>
  )
}

export default Owner