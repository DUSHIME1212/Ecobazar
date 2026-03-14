import DashboardLayout from "../../components/DashboardLayout";

function OrderHistory() {
  const orders = [
    {
      id: "#3933",
      date: "4 April, 2021",
      total: "$135.00 (5 Products)",
      status: "Processing",
    },
    {
      id: "#5045",
      date: "27 Mar, 2021",
      total: "$25.00 (1 Product)",
      status: "on the way",
    },
    {
      id: "#5028",
      date: "20 Mar, 2021",
      total: "$250.00 (4 Products)",
      status: "Completed",
    },
    {
      id: "#4800",
      date: "19 Mar, 2021",
      total: "$35.00 (1 Product)",
      status: "Completed",
    },
    {
      id: "#4152",
      date: "18 Mar, 2021",
      total: "$578.00 (13 Products)",
      status: "Completed",
    },
    {
      id: "#8811",
      date: "10 Mar, 2021",
      total: "$345.00 (7 Products)",
      status: "Completed",
    },
    {
      id: "#3536",
      date: "5 Mar, 2021",
      total: "$560.00 (2 Products)",
      status: "Completed",
    },
    {
      id: "#1374",
      date: "27 Feb, 2021",
      total: "$560.00 (2 Products)",
      status: "Completed",
    },
    {
      id: "#7791",
      date: "25 Feb, 2021",
      total: "$560.00 (2 Products)",
      status: "Completed",
    },
    {
      id: "#4846",
      date: "24 Feb, 2021",
      total: "$23.00 (1 Product)",
      status: "Completed",
    },
    {
      id: "#5948",
      date: "20 Feb, 2021",
      total: "$23.00 (1 Product)",
      status: "Completed",
    },
    {
      id: "#1577",
      date: "12 Oct, 2020",
      total: "$23.00 (1 Product)",
      status: "Completed",
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "processing":
        return "text-orange-600";
      case "on the way":
        return "text-blue-600";
      case "completed":
        return "text-green-600";
      case "canceled":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <DashboardLayout>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-white">
          <h3 className="font-medium">Order History</h3>
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
                  <td className="p-4 font-medium text-gray-900">{order.id}</td>
                  <td className="p-4 text-gray-600">{order.date}</td>
                  <td className="p-4 text-gray-600">{order.total}</td>
                  <td
                    className={`p-4 font-medium ${getStatusColor(order.status)}`}
                  >
                    {order.status}
                  </td>
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
        <div className="p-4 flex justify-center border-t border-gray-100">
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-green-500 hover:text-green-500 transition-colors">
              &lt;
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white font-medium">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-500 transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-500 transition-colors">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-green-500 hover:text-green-500 transition-colors">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default OrderHistory;
