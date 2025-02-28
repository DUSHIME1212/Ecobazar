//import { useLocation } from "react-router-dom";
import xyz from "/imageNews.png"
function Shop(){
    
    return (
        <div className="flex items-center justify-between bg-slate-500 w-[872px] h-[400px] mx-auto p-2">
        <div id="newsLetterPopUp" className="">
            <img src={xyz} width="354px" height="380px" />
        </div>
        
            <div className="w-[428] h-[96] flex-auto p-4">
                <div>
                    <img src="x.png" className="float-right h-[45] w-[45]" />
                </div>
                <h1 className="text-5xl text-center">Subscribe to our newsletter</h1>
                <div className="text-base text-center p-3">
                Subscribe to our newlletter and Save your 20% money with discount code today.
                </div>
                <div className="relative w-[428] h-[49.5] p-4">
                    <input type="email" placeholder="Enter your email address" className="w-full border rounded-2xl p-2 pr-10 focus:ring" />
                    <button className="absolute right-2 top-1/2 trasnform -translate-y-1/2 rounded-md">Subscribe</button>
                </div>
                <div className="w-[199] h-[21] p-2">
                <img src="square.png" className="w-[20] h-[20]"/>
                <span> not show this window</span></div>

            
        </div>
        
        </div>
        
    );
}
export default Shop;