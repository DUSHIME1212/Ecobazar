import { MdDashboard } from "react-icons/md";
import { GrCycle } from "react-icons/gr";
import { GoHeart } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";

function SideBar() {
    return (
       <div className="flex flex-col h-[47dvh] w-[15dvw] rounded-md border border-solid  mx-4 m-8 left-16 relative">
          <p className="left-4 relative top-3 text-black font-semibold ">
            Navigation
          </p>
          <span className="flex flex-col justify-between pt-4">
              <ul className="text-xl text-black space-y-1 ">
                <li className="nav"><MdDashboard /> Dashboard</li>
                <li className="nav"><GrCycle /> Order</li>
                <li className="nav"><GoHeart /> Wish</li>
                <li className="nav"><BsHandbag /> Shopping cart</li>
                <li className="nav"><IoSettingsOutline /> Settings</li>
                <li className="nav"><CiLogin /> Log out</li>
              </ul>
          </span>
       </div>
    )
}

export default SideBar
