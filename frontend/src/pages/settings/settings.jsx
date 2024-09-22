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

          <div className="flex flex-col p-4 border rounded-md w-[93dvw] lg:w-[73dvw] h-full mt-4">
             <h1>Billing Address</h1>
             <hr className="w-full h-1" />

             <div className="" id="form">
               <form action="" method="get">
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
                  <label htmlFor="Company">
                    Company Name <small>(Option)</small>
                    in
                  </label>
                  <select id="country" value={selectedCOuntry} onChange={handleCountry}>
                    <option value="">--please choose an option --</option>
                    {
                      countries.map((country, index) => (
                        <option value={country} key={index}>
                          {country}
                        </option>
                      ))
                    }
                  </select>
                      
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
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AccountSettings;
