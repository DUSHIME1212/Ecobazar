import { MdDashboard, MdHistory, MdSettings, MdLogout } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function SideBar() {
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
    { name: "Order History", path: "/order-history", icon: <MdHistory /> },
    { name: "Wishlist", path: "/wishlist", icon: <GoHeart /> },
    { name: "Shopping Cart", path: "/cart", icon: <BsHandbag /> },
    { name: "Settings", path: "/settings", icon: <MdSettings /> },
    { name: "Log-out", path: "/logout", icon: <MdLogout /> },
  ];

  return (
    <div className="flex flex-col rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Navigation</h2>
        <nav>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 text-lg transition-colors border-l-4 ${
                      isActive
                        ? "bg-gray-50 text-black border-green-500 font-medium"
                        : "text-gray-600 border-transparent hover:bg-gray-50 hover:text-black"
                    }`
                  }
                >
                  <span className="text-2xl">{item.icon}</span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
