import React from "react";

 function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 ml-40 md:ml-80 mr-6">

      {/* CARD 1 */}
      <div className="bg-gray-100 shadow-md rounded-xl p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-700">Total Registered Users</h3>
        <p className="text-3xl font-bold text-teal-600 mt-2">124</p>
        <p className="text-sm text-gray-500 mt-1">+12 this week</p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-700">Competitors Registered</h3>
        <p className="text-3xl font-bold text-teal-600 mt-2">36</p>
        <p className="text-sm text-gray-500 mt-1">+7 this month</p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-700">Comments Awaiting Approval</h3>
        <p className="text-3xl font-bold text-teal-600 mt-2">3</p>
        <p className="text-sm text-gray-500 mt-1">Last 24 hours</p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white shadow-md rounded-xl p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-700">New Messages </h3>
        <p className="text-3xl font-bold text-teal-600 mt-2">3</p>
        <p className="text-sm text-gray-500 mt-1">2 flagged</p>
      </div>

          {/* CARD 5 */}
      {/* <div className="bg-white shadow-md rounded-xl p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-700">Support Tickets</h3>
        <p className="text-3xl font-bold text-teal-600 mt-2">5</p>
        <p className="text-sm text-gray-500 mt-1">2 unresolved</p>
      </div> */}

          {/* CARD 6 */}
      {/* <div className="bg-white shadow-md rounded-xl p-6 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-700">Support Tickets</h3>
        <p className="text-3xl font-bold text-teal-600 mt-2">5</p>
        <p className="text-sm text-gray-500 mt-1">2 unresolved</p>
      </div>  */}

    </div>
  );
}
export default DashboardCards;