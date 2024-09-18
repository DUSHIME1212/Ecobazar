import { useLocation } from "react-router-dom"
import Breadcrumbs from "../../components/Breadcrumbs"
import SideBar from "../../components/SideBar";
import { useState } from 'react';

function DashBoard() {
   const [editing, setEditing] = useState(false)
   const [profileImage, setImage] = useState('/avatar/avatarone.jpg');
   const [name, setName] = useState('Dianne Russell')

   const handleEditClick = () => {
     setEditing(!editing)
   }

   const pathName = useLocation();

   return (
     <div className="flex flex-col">
       <Breadcrumbs pageroute={pathName.pathname} />
       <div className="flex">
         <div className="w-1/4">
           <SideBar/>
         </div>
         <div className="w-3/4 flex justify-between">
           <div className="flex flex-col justify-center items-center border rounded-md w-[35dvw] h-[45dvh] mt-5">
             {editing ? (
               <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
               />
             ) : (
               <img src={profileImage} width={120} alt="" className="rounded-full"/>
             )}

             {editing ? (
               <div>
                 <input
                   type="text"
                   placeholder="Name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className="text-xl font-bold mt-2"
                 />
                 <button onClick={handleEditClick}>Save</button>
               </div>
             ) : (
               <h1 className="text-xl font-bold">{name}</h1>
             )}
             <p className="text-gray-500">Customer</p>

             <button className="mt-2 font-semibold text-green-500 text-lg" onClick={handleEditClick}>
               {editing ? 'Save Profile' : 'Edit Profile'}
             </button>
           </div>
         </div>
       </div>
     </div>  
   )
}

export default DashBoard