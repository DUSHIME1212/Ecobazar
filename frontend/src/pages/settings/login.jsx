import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";

function LoginAuth() {
  const pageid = useLocation();
  const [seePassword, Setseepassword] = useState(0);
  function handleSee(e) {
    e.preventDefault();
    Setseepassword((prev) => !prev);
    console.log(pageid);
    
  }

  return (
    <div className="h-[65dvh] w-full flex flex-col justify-start items-center">
      <Breadcrumbs pageroute={pageid.pathname} />
      <div
        className="flex flex-col items-center justify-center w-[36dvw] bg-white p-8 border rounded-xl hover:shadow-xl transition-all duration-300 h-[48dvh]"
        id="card"
      >
        <h1>Sign In</h1>
        <form className="flex flex-col items-center size-full p-4 space-y-3">
          <label htmlFor="" className="relative w-full">
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-gray-300 w-full focus:border-green-500 h-[4dvh] p-4 text-sm rounded-md outline-none"
            />
          </label>
          <label htmlFor="" className="relative w-full">
            <input
              type={seePassword ? "text" : "password"}
              placeholder="Password"
              className="border-2 border-gray-300 w-full focus:border-green-500 h-[4dvh] p-4 text-sm rounded-md outline-none"
            />
            <button
              onClick={handleSee}
              className="absolute top-1/2 -translate-y-1/2 right-2"
            >
              {seePassword ? <Eye size={16} /> : <EyeSlash size={16} />}
            </button>
          </label>
          <span className="flex items-center gap-4 py-2 w-full justify-between space-x-4 ">
            <label htmlFor="rem" className="flex items-center gap-2">
              <input type="checkbox" className="" id="rem" />
              Remember me
            </label>
            <a href="#" className="text-sm">
              Forgot Password?
            </a>
          </span>
          <button className="p-2 text-sm w-full rounded-full bg-[#00b207] bg-opacity-70 hover:bg-opacity-100 duration-700 text-white">
            Sign In
          </button>
          <h3 className="text-sm opacity-100">
            Don’t have account?{" "}
            <Link className="opacity-100" to={"/"}>
              Register
            </Link>
          </h3>
        </form>
      </div>
    </div>
  );
}

export default LoginAuth;
