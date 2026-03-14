import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { countries } from "../../utils/utils";

function AccountSettings() {
  const [formData, setFormData] = useState({
    firstName: "Dianne",
    lastName: "Russell",
    email: "dianne.russell@gmail.com",
    phoneNumber: "(603) 555-0123",
    company: "Zakirsoft",
    street: "4140 Parker Rd. Allentown, New Mexico 31134",
    country: "United States",
    state: "Washington DC",
    zipCode: "20033",
  });

  const [image, setImage] = useState("/avatar/avatarone.jpg");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const InputField = ({ label, name, type = "text", placeholder, value }) => (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className="border border-gray-200 rounded-md px-4 py-2.5 outline-none focus:border-green-500 transition-colors"
      />
    </div>
  );

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        {/* Account Settings */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-white">
            <h3 className="font-medium">Account Settings</h3>
          </div>
          <div className="p-6 flex flex-col lg:flex-row gap-8">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
              />
              <InputField
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
              />
              <button className="bg-green-600 text-white rounded-full px-8 py-2.5 font-semibold mt-4 w-fit hover:bg-green-700 transition-colors">
                Save Changes
              </button>
            </div>
            <div className="flex flex-col items-center gap-4 lg:w-1/3">
              <img
                src={image}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-50"
              />
              <input
                type="file"
                id="imageInput"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
              <label
                htmlFor="imageInput"
                className="cursor-pointer border-2 border-green-600 text-green-600 rounded-full px-6 py-2 font-medium hover:bg-green-50 transition-colors"
              >
                Choose Image
              </label>
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-white">
            <h3 className="font-medium">Billing Address</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              label="First name"
              name="firstName"
              value={formData.firstName}
            />
            <InputField
              label="Last name"
              name="lastName"
              value={formData.lastName}
            />
            <InputField
              label="Company Name (optional)"
              name="company"
              value={formData.company}
            />
            <div className="md:col-span-3">
              <InputField
                label="Street Address"
                name="street"
                value={formData.street}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm font-medium text-gray-700">
                Country / Region
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="border border-gray-200 rounded-md px-4 py-2.5 outline-none focus:border-green-500 transition-colors bg-white"
              >
                {countries.map((country, idx) => (
                  <option key={idx} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-sm font-medium text-gray-700">
                States
              </label>
              <select
                name="state"
                className="border border-gray-200 rounded-md px-4 py-2.5 outline-none focus:border-green-500 transition-colors bg-white"
              >
                <option>Washington DC</option>
                <option>New York</option>
                <option>California</option>
              </select>
            </div>
            <InputField
              label="Zip Code"
              name="zipCode"
              value={formData.zipCode}
            />
            <InputField label="Email" name="email" value={formData.email} />
            <InputField
              label="Phone"
              name="phoneNumber"
              value={formData.phoneNumber}
            />
            <div className="md:col-span-3">
              <button className="bg-green-600 text-white rounded-full px-8 py-2.5 font-semibold mt-4 hover:bg-green-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-white">
            <h3 className="font-medium">Change Password</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-1 gap-4">
            <InputField
              label="Current Password"
              name="currentPassword"
              type="password"
              placeholder="Password"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="New Password"
                name="newPassword"
                type="password"
                placeholder="Password"
              />
              <InputField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="bg-green-600 text-white rounded-full px-8 py-2.5 font-semibold mt-4 w-fit hover:bg-green-700 transition-colors">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AccountSettings;
