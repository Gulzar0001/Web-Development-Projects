import React from 'react';

function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm font-medium">
        Reminder! Dummy data will be reset in every 30 minutes.
      </div>

      <h1 className="text-2xl font-bold text-green-600 mb-1">Good Afternoon!</h1>
      <p className="text-gray-800 mb-6">John Doe</p>

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-green-500 text-white p-4 rounded shadow">
          <div className="font-bold">Total Earnings</div>
          <div className="text-xl">₹467.12</div>
        </div>
        <div className="bg-red-500 text-white p-4 rounded shadow">
          <div className="font-bold">Total Orders</div>
          <div className="text-xl">5</div>
        </div>
        <div className="bg-purple-500 text-white p-4 rounded shadow">
          <div className="font-bold">Total Customers</div>
          <div className="text-xl">2</div>
        </div>
        <div className="bg-blue-500 text-white p-4 rounded shadow">
          <div className="font-bold">Total Products</div>
          <div className="text-xl">443</div>
        </div>
      </div>

      {/* Order Statistics */}
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Order Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
        {["Total Orders", "Pending", "Confirmed", "Ongoing", "Delivered", "Canceled", "Returned", "Rejected"].map((label) => (
          <div key={label} className="bg-white p-4 rounded shadow text-center">
            <div className="font-medium text-gray-600">{label}</div>
            <div className="text-xl text-gray-800">0</div>
          </div>
        ))}
      </div>

      {/* Sales Summary + Orders Summary */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-700">Sales Summary</h3>
            <input type="text" value="04/01/2025 - 04/30/2025" readOnly className="text-sm border px-2 py-1 rounded" />
          </div>
          <div className="text-sm text-gray-600">Total Sales: ₹0.00</div>
          <div className="text-sm text-gray-600 mb-4">Avg Sales Per Day: ₹0.00</div>
          <div className="h-32 bg-gray-100 rounded"></div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-700">Orders Summary</h3>
            <input type="text" value="Select Date Range" readOnly className="text-sm border px-2 py-1 rounded" />
          </div>
          <div className="h-32 bg-gray-100 rounded mb-2"></div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><span className="text-green-600">●</span> Delivered (0%)</li>
            <li><span className="text-purple-600">●</span> Canceled (0%)</li>
            <li><span className="text-red-600">●</span> Rejected (0%)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
