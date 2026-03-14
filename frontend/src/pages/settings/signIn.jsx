import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  const pageid = useLocation();
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [seePassword, setSeePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
    setError("");
    setLoading(true);
    const result = await signup({ email, password });
    if (result.success) {
      navigate('/login');
    } else {
      setError(result.message);
    }
    setLoading(false);
  }

  function handleSee(e) {
    e.preventDefault();
    setSeePassword((prev) => !prev);
  }

  return (
    <div className="min-h-[65dvh] w-full flex flex-col  justify-start items-center">
      <Breadcrumbs pageroute={pageid.pathname} />
      <div className="px-8">
        <div
          className="flex flex-col items-center justify-center w-full lg:w-[36dvw] bg-white p-8 my-8 py-8 border rounded-xl hover:shadow-xl transition-all duration-300 min-h-[48dvh]"
          id="card"
        >
          <h1>Create account</h1>
          <form onSubmit={handleSignup} className="flex flex-col items-center size-full p-4 space-y-3">
            {error && <p className="text-red-500 text-sm w-full font-medium">{error}</p>}
            <label htmlFor="" className="relative w-full">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-gray-300 w-full focus:border-green-500 h-[4dvh] p-4 text-sm rounded-md outline-none"
                required
              />
            </label>
            <label htmlFor="" className="relative w-full">
              <input
                type={seePassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray-300 w-full focus:border-green-500 h-[4dvh] p-4 text-sm rounded-md outline-none"
                required
              />
              <button
                type="button"
                onClick={handleSee}
                className="absolute top-1/2 -translate-y-1/2 right-2"
              >
                {seePassword ? <Eye size={16} /> : <EyeSlash size={16} />}
              </button>
            </label>
            <label htmlFor="" className="relative w-full">
              <input
                type={seePassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-2 border-gray-300 w-full focus:border-green-500 h-[4dvh] p-4 text-sm rounded-md outline-none"
                required
              />
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
            <button 
              type="submit"
              disabled={loading}
              className={`p-2 text-sm w-full rounded-full bg-[#00b207] ${loading ? 'opacity-50' : 'bg-opacity-70 hover:bg-opacity-100'} duration-700 text-white`}
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
            <h3 className="text-sm opacity-100">
              if you have an account?{" "}
              <Link className="opacity-100" to={"/login"}>
                log in
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
