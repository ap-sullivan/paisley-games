import React from "react";

function AdminTopNav() {
  return (
    <nav className="w-full h-16 bg-white shadow-md flex items-center justify-between px-6">
      
     
      <div className="text-xl font-semibold text-teal-600">
        Admin Panel
      </div>

      {/* RIGHT SIDE LINKS */}
      <div className="flex items-center space-x-6 text-gray-700 text-sm font-medium">
        <a href="#" className="hover:text-teal-600 transition">Home</a>
        <a href="#" className="hover:text-teal-600 transition">Settings</a>
        <a href="#" className="hover:text-teal-600 transition">Profile</a>
        <button className="px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition">
          Logout
        </button>
      </div>

    </nav>
  );
}

export default AdminTopNav;
