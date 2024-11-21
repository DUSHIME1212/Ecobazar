//import { useLocation } from "react-router-dom";
import xyz from "/imageNews.png"
function Shop(){
    
    return (
        <div className="felx items-center space-x-4 bg-slate-500 w-[872px] h-[400px] mx-auto p-2">
        <div id="newsLetterPopUp" className="">
            <img src={xyz} width="354px" height="380px" />
        </div>
        <div className="flex-auto">
            <div>
                <p>Subscribe to our newsletter</p>
            </div>
        </div>
        
        </div>
        
    );
}
export default Shop;