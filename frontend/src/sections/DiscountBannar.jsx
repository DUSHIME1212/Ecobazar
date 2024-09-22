import { ArrowRight } from "@phosphor-icons/react"

const DiscountBannar = () => {
  return (
    <div className='min-h-96 bg-green-500 relative w-full object-cover overflow-clip rounded-3xl p-8' style={{backgroundImage:`url('/Discount Bannar.png')`}}>
        <div className="size-full absolute top-0 left-0 bg-gradient-to-r from-white/5 to-60% to-black/80"/>
        <div className="absolute right-4 z-10 max-w-96 flex flex-col gap-4 text-white p-4">
            <h2>Summer Sale</h2>
            <h1 className="text-5xl"><span className="text-orange-500">37%</span> OFF</h1>
            <p>Free on all your order, Free Shipping and  30 days money-back guarantee</p>
            <button className="flex flex-row gap-2 p-3 size-fit rounded-xl px-4 text-white items-center bg-green-500">
                <span>Shop Now</span>
                <ArrowRight size={18}/>
            </button>
        </div>
    </div>
  )
}

export default DiscountBannar