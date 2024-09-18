import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import SideBar from "../../components/SideBar";
import { useState } from "react";

function DashBoard() {
  const [editing, setEditing] = useState(false);
  const [profileImage, setImage] = useState("/avatar/avatarone.jpg");
  const [name, setName] = useState("Dianne Russell");
  const [editingAddress, setEditingAddress] = useState(false);
  const [address, setAddress] = useState(
    "4140 Parker Rd. Allentown, New Mexico 31134"
  );
  const [email, setEmail] = useState("dainne.ressell@gmail.com");
  const [phone, setPhone] = useState("(671) 555-0110");

  const handleEditClick = () => {
    setEditing(!editing);
  };
  const handleEditAddressClick = () => {
    setEditingAddress(!editingAddress);
  };

  const pathName = useLocation();

  return (
    <div className="flex flex-col">
      <Breadcrumbs pageroute={pathName.pathname} />
      <div className="flex">
        <div className="w-1/4">
          <SideBar />
        </div>
        <div className="w-3/4 flex">
          <div className="flex flex-col items-center border rounded-md w-[34dvw] h-[38dvh] mt-7 ml-16">
            {editing ? (
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
              />
            ) : (
              <img
                src={profileImage}
                width={80}
                alt=""
                className="rounded-full"
              />
            )}

            {editing ? (
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-lg font-bold mt-2"
                />
                <button onClick={handleEditClick}>Save</button>
              </div>
            ) : (
              <h1 className="text-lg font-bold">{name}</h1>
            )}
            <p className="text-gray-500">Customer</p>

            <button
              className="mt-2 font-semibold text-green-500 text-lg"
              onClick={handleEditClick}
            >
              {editing ? "Save Profile" : "Edit Profile"}
            </button>
          </div>
        </div>

        <div className="flex flex-col w-3/4">
          <div className="p-4 border rounded-md w-[32dvw] h-[38dvh] mt-7 items-center justify-end">
            <p className="text-sm">BILLING ADDRESS </p>
            <div>
              {editingAddress ? (
                <>
                  <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-lg font-bold mt-2"
                  />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mb-2"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mb-2"
                  />
                </>
              ) : (
                <div className="flex flex-col"> 
                <h1 className="text-lg font-bold">{name}</h1>
                  <p>{address}</p>
                  <p id="email">{email}</p>
                  <p id="tel">{phone}</p>
                </div>
              )}
              <button
                className="text-green-600 mt-4"
                onClick={handleEditAddressClick}
              >
                {editingAddress ? "Save Address" : "Edit Address"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashBoard;
