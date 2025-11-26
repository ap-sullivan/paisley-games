import React from 'react'
import AdminTopNav from '../components/navigation/AdminTopNav'
import SideNav from '../components/navigation/SideNav';
import DashboardCards from '../components/layout/DashboardCards';


function Dashboard() {
  return (
    <>

   <AdminTopNav/>
   <SideNav/>
   <DashboardCards />
  


    </>
  )
}

export default Dashboard
