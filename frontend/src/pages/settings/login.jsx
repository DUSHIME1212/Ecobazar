 


function LoginAuth() {
    return(
       <main className="h-[65dvh] w-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center w-[28dvw] bg-white border rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 h-[48dvh] hover:scale-105 hover:-translate-y-1" id="card">
            <h1>
                Sign In
            </h1>
            <form className="flex flex-col items-center space-y-3">
                <input type="email" placeholder="Email" className="border-b-2 border-gray-300 focus:border-green-500 h-[4dvh] w-[95%] p-4 text-sm rounded-md outline-none" />
                <input type="password" placeholder="Password" className="border-b-2 border-gray-300 focus:border-green-500 h-[4dvh] w-[95%] p-4 text-sm rounded-md mt-4 outline-none" />
                 <span className="flex space-x-4 ">
                    <span className="">
                        <input type="checkbox" className=""/>
                        Remember me
                    </span>
                
                 <a href="#" className="text-sm  mt-4">
                    Forgot Password?
                 </a>
                 </span>
                <button className="w-[95%] p-2 text-sm  rounded-full bg-green-500 text-white">
                    Sign In
                </button>
                
            </form>
          
        </div>
    
       </main>
    );
}

export default LoginAuth;