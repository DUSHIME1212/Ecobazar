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
          <div className="w-3/4 flex flex-col">
            <div className="flex">
              <div className="flex flex-col items-center border rounded-md w-[34dvw] h-[38dvh] mt-7 mr-4">
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
                    className="rounded-full mt-5"
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
              <div className="p-4 border rounded-md w-[32dvw] h-[38dvh] mt-7">
                <p className="text-sm">BILLING ADDRESS</p>
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
            <div className="mt-4 w-full">
              <div className="p-4 border rounded-md w-[66dvw] h-full">
                <span className="flex justify-between mb-4">
                  <h1 className="font-bold">Recent Order History</h1>
                  <button className="text-green-500">view all</button>
                </span>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 text-left">Order ID</th>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-left">Total</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">View mode</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3">#738</td>
                        <td className="p-3">8 Sep, 2020</td>
                        <td className="p-3">$135.00 (5 Products)</td>
                        <td className="p-3">Processing</td>
                        <td className="p-3 text-green-500">View Details</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">#737</td>
                        <td className="p-3">1 Sep, 2020</td>
                        <td className="p-3">$120.00 (4 Products)</td>
                        <td className="p-3">Delivered</td>
                        <td className="p-3 text-green-500">View Details</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">#736</td>
                        <td className="p-3">31 Aug, 2020</td>
                        <td className="p-3">$110.00 (3 Products)</td>
                        <td className="p-3">Canceled</td>
                        <td className="p-3 text-green-500">View Details</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">#735</td>
                        <td className="p-3">27 Aug, 2020</td>
                        <td className="p-3">$100.00 (2 Products)</td>
                        <td className="p-3">Shipped</td>
                        <td className="p-3 text-green-500">View Details</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">#734</td>
                        <td className="p-3">24 Aug, 2020</td>
                        <td className="p-3">$90.00 (1 Product)</td>
                        <td className="p-3">Completed</td>
                        <td className="p-3 text-green-500">View Details</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3">#702</td>
                        <td className="p-3">18 sept, 2020</td>
                        <td className="p-3">$100.00 (5 Products)</td>
                        <td className="p-3">Completed</td>
                        <td className="p-3 text-green-500">View Details</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default DashBoard;
