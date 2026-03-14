import DashboardLayout from "../../components/DashboardLayout";
import { Link } from "react-router-dom";

function OrderDetails() {
  const products = [
    {
      name: "Red Capsicum",
      price: "$14.00",
      quantity: "x5",
      subtotal: "$70.00",
      image:
        "https://images.unsplash.com/photo-1566270832367-e95e4e73d328?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Green Capsicum",
      price: "$14.00",
      quantity: "x2",
      subtotal: "$28.00",
      image:
        "https://images.unsplash.com/photo-1590411641322-076f7df12613?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Green Chili",
      price: "$26.70",
      quantity: "x10",
      subtotal: "$267.00",
      image:
        "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=200&auto=format&fit=crop",
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-lg p-4 bg-white">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Order Details</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">April 24, 2021</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">3 Products</span>
          </div>
          <Link
            to="/order-history"
            className="text-green-600 font-semibold hover:underline mt-2 md:mt-0"
          >
            Back to List
          </Link>
        </div>

        {/* Addresses and Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 border border-gray-200 rounded-lg overflow-hidden bg-white">
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-4">
                Billing Address
              </span>
              <h4 className="font-medium text-lg mb-1">Dianne Russell</h4>
              <p className="text-gray-600 text-sm mb-4">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>
              <div className="text-sm">
                <span className="text-gray-400 block uppercase text-[10px] font-medium">
                  Email
                </span>
                <p className="text-gray-900">dianne.russell@gmail.com</p>
              </div>
              <div className="text-sm mt-3">
                <span className="text-gray-400 block uppercase text-[10px] font-medium">
                  Phone
                </span>
                <p className="text-gray-900">(671) 555-0110</p>
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-4">
                Shipping Address
              </span>
              <h4 className="font-medium text-lg mb-1">Dianne Russell</h4>
              <p className="text-gray-600 text-sm mb-4">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>
              <div className="text-sm">
                <span className="text-gray-400 block uppercase text-[10px] font-medium">
                  Email
                </span>
                <p className="text-gray-900">dianne.russell@gmail.com</p>
              </div>
              <div className="text-sm mt-3">
                <span className="text-gray-400 block uppercase text-[10px] font-medium">
                  Phone
                </span>
                <p className="text-gray-900">(671) 555-0110</p>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 bg-white space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
              <div className="flex flex-col">
                <span className="text-gray-400 uppercase text-[10px] font-medium">
                  Order ID
                </span>
                <span className="font-medium text-gray-900">#4152</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex flex-col">
                <span className="text-gray-400 uppercase text-[10px] font-medium">
                  Payment Method
                </span>
                <span className="font-medium text-gray-900">Paypal</span>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal:</span>
                <span className="font-medium">$365.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Discount (20%):</span>
                <span className="font-medium text-red-500">-$73.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping:</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-100 items-center">
                <span className="text-lg font-medium">Total:</span>
                <span className="text-xl font-medium text-green-600">
                  $84.00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="border border-gray-200 rounded-lg p-8 bg-white overflow-x-auto">
          <div className="flex items-center justify-between min-w-[600px] relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 left-0 w-1/3 h-1 bg-green-500 -translate-y-1/2 z-0"></div>

            {[
              { label: "Order Received", status: "completed", step: "01" },
              { label: "Processing", status: "active", step: "02" },
              { label: "On the way", status: "pending", step: "03" },
              { label: "Delivered", status: "pending", step: "04" },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 relative z-10 bg-white px-4"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm border-2 ${
                    step.status === "completed"
                      ? "bg-green-500 border-green-500 text-white"
                      : step.status === "active"
                        ? "bg-white border-green-500 text-green-500"
                        : "bg-white border-gray-200 text-gray-300"
                  }`}
                >
                  {step.status === "completed" ? "✓" : step.step}
                </div>
                <span
                  className={`text-xs font-medium uppercase tracking-wider ${
                    step.status === "completed"
                      ? "text-green-600"
                      : step.status === "active"
                        ? "text-green-600"
                        : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Product List */}
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-400 uppercase font-medium">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.map((product, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <span className="font-medium text-gray-900">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">{product.price}</td>
                    <td className="p-4 text-gray-600">{product.quantity}</td>
                    <td className="p-4 font-medium text-gray-900">
                      {product.subtotal}
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

export default OrderDetails;
