import { useLocation } from "react-router-dom";
import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import SideBar from "../../components/SideBar";
import { countries } from "../../utils/utils";

function AccountSettings() {
  const pathName = useLocation();
  const [selectedCOuntry, setSelectedCountry] = useState('');
  const handleCountry = (e) => {
    setSelectedCountry(e.target.value);
  };
  

  const [formData, setFormData] = useState({
    firstName: "Dianne",
    lastName: "Russel",
    email: "Dianne.Russel@gmail.com",
    phoneNumber: "(603) 555-0123",
  });
  const [image, setImage] = useState("/avatar/avatarone.jpg");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Saving changes:", formData);
  };


  //TODO:
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

 
  return (
    <main className="">
      <Breadcrumbs pageroute={pathName.pathname} />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4">
          <SideBar />
        </div>
        <div className="w-full lg:w-3/4">
          <div className="flex" id="rig my-2 ht-div">
            <div className="flex flex-col border rounded-md w-full lg:min-w-[50dvw] min-h-[66dvh] mt-7 mr-4">
              <h1 className="p-4">Account Settings</h1>
              <hr className="w-full h-1" />
              <div className="flex justify-between p-5 space-y-4" id="content">
                <form
                  onSubmit={handleSaveChanges}
                  className="flex flex-col space-y-1 w-full lg:w-[30dvw]"
                >
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="input_controllers"
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="input_controllers"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input_controllers"
                  />
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="input_controllers"
                  />
                  <button
                    type="submit"
                    className=" bg-green-600 text-white  rounded-full w-[180px] h-[38px] text-center"
                  >
                    Save Changes
                  </button>
                </form>
                <div className="flex flex-col items-center w-[15dvw]">
                  <img
                    src={image}
                    width={120}
                    alt="User Avatar"
                    className="rounded-full mb-4"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="imageInput"
                  />
                  <label
                    htmlFor="imageInput"
                    className="cursor-pointer rounded-full border-2 lg:w-[130px] w-[90px] h-[40px] text-sm lg:h-[38px] flex items-center justify-center lg:font-semibold  text-green-600 lg:p-0 pl-5 border-solid border-green-600"
                  >
                    Change Image
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* TODO: form manipulation */}

          <div className="flex flex-col p-4 border rounded-md w-[93dvw] lg:w-[73dvw] h-[82dvh] my-4">
             <h1>Billing Address</h1>
             <hr className="w-full h-1" />

             <div className="pt-5" id="form">
               <form action="" method="get" className="flex flex-col space-x-3 space-y-11">

                <div className="flex space-x-3" id="row-1">
                  <span className="flex flex-col ">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="input_controllers"
                  /></span>

                  <span className="flex flex-col">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="input_controllers"
                  /></span>

                  <span className="flex flex-col">
                  <label htmlFor="Company">
                    Company Name <small>(Option)</small>
                  
                  </label>
                  <input
                    type="text"
                    name="company Name"
                    placeholder="PixelRwanda"
                    // value={formData.lastName}
                    // onChange={handleInputChange}
                    className="input_controllers"
                  /></span>
                  
                </div>
               
                 <span className="w-full m-3">
                  <label htmlFor="street">Street</label>
                  <input type="text" name="" id="" className="w-full h-[30px] outline-none border border-solid rounded-md focus:border-2 focus:border-solid focus:border-green-500 placeholder:text-gray-300 pl-2 font-semibold"/>
                 </span>


                  <div className="flex space-x-3" id="row-2">
                    <span className="flex flex-col">
                      <label htmlFor="Company">
                     Country / Region
                  </label>
                  <select id="country" value={selectedCOuntry} onChange={handleCountry}  className="input_controllers">
                    <option value="">--please choose an option --</option>
                    {
                      countries.map((country, index) => (
                        <option value={country} key={index}>
                          {country}
                        </option>
                      ))
                    }
                  </select></span>

                    <span className="flex flex-col">
                    <label htmlFor="">States</label>
                   <select name="" className="input_controllers" id="">
                    <option value="" >washington</option>
                   </select></span>

                    <span className="flex flex-col">
                    <label htmlFor="">Zipcode</label>
                   <input type="number" placeholder="20033"  className="input_controllers"/></span>
                  </div>
                 
                   <div className="flex space-x-3" id="last-row">

                    <span className="flex flex-col">
                    <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input_controllers"
                  /> </span>
                    <span className="flex flex-col">
                    <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="input_controllers"
                  /></span>
                  
                 
                    </div>   
                  <button
                    type="submit"
                    className=" bg-green-600 text-white  rounded-full w-[180px] h-[38px] text-center"
                  >
                    Save Changes
                  </button>
               </form>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AccountSettings;
