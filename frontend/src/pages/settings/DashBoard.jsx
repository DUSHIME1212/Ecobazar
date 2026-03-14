import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

function DashBoard() {
  const [editing, setEditing] = useState(false);
  const [profileImage, setImage] = useState("/avatar/avatarone.jpg");
  const [name, setName] = useState("Dianne Russell");
  const [editingAddress, setEditingAddress] = useState(false);
  const [address, setAddress] = useState(
    "4140 Parker Rd. Allentown, New Mexico 31134",
  );
  const [email, setEmail] = useState("dainne.ressell@gmail.com");
  const [phone, setPhone] = useState("(671) 555-0110");

  const handleEditClick = () => setEditing(!editing);
  const handleEditAddressClick = () => setEditingAddress(!editingAddress);

  const orders = [
    {
      id: "#738",
      date: "8 Sep, 2020",
      total: "$135.00 (5 Products)",
      status: "Processing",
    },
    {
      id: "#737",
      date: "1 Sep, 2020",
      total: "$120.00 (4 Products)",
      status: "Delivered",
    },
    {
      id: "#736",
      date: "31 Aug, 2020",
      total: "$110.00 (3 Products)",
      status: "Canceled",
    },
    {
      id: "#735",
      date: "27 Aug, 2020",
      total: "$100.00 (2 Products)",
      status: "Shipped",
    },
    {
      id: "#734",
      date: "24 Aug, 2020",
      total: "$90.00 (1 Product)",
      status: "Completed",
    },
    {
      id: "#702",
      date: "18 Sep, 2020",
      total: "$100.00 (5 Products)",
      status: "Completed",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Card */}
          <div className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <img
                src={profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              {editing && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setImage(URL.createObjectURL(e.target.files[0]))
                  }
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              )}
            </div>
            {editing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-xl font-medium border-b border-gray-300 focus:outline-none mb-2"
              />
            ) : (
              <h3 className="text-xl font-medium">{name}</h3>
            )}
            <p className="text-gray-500 mb-4">Customer</p>
            <button
              onClick={handleEditClick}
              className="text-green-600 font-semibold hover:underline"
            >
              {editing ? "Save Profile" : "Edit Profile"}
            </button>
          </div>

          {/* Billing Address Card */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                Billing Address
              </span>
            </div>
            {editingAddress ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="border p-2 rounded"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-2 rounded"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border p-2 rounded"
                />
              </div>
            ) : (
              <div className="space-y-1">
                <h4 className="font-medium text-lg">{name}</h4>
                <p className="text-gray-600">{address}</p>
                <p className="text-gray-600">{email}</p>
                <p className="text-gray-600">{phone}</p>
              </div>
            )}
            <button
              onClick={handleEditAddressClick}
              className="mt-4 text-green-600 font-semibold hover:underline"
            >
              {editingAddress ? "Save Address" : "Edit Address"}
            </button>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="p-4 flex justify-between items-center border-b border-gray-200">
            <h3 className="font-medium">Recent Order History</h3>
            <button className="text-green-600 font-medium hover:underline text-sm">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-400 uppercase font-medium">
                <tr>
                  <th className="p-4">Order ID</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 font-medium">{order.id}</td>
                    <td className="p-4 text-gray-600">{order.date}</td>
                    <td className="p-4 text-gray-600">{order.total}</td>
                    <td className="p-4 text-gray-600">{order.status}</td>
                    <td className="p-4">
                      <button className="text-green-600 font-semibold hover:underline">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashBoard;
