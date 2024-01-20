import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Layout = ({children}) => {
    const sideBarItems =[
        {
        label:"My account"},
        {
            label:"Activities",
        
          },{
            label:"Orders",
        
          },{
            label:"Customers",
        
          },
          {
            label:"Analytics",
        
          },
          {
            label:"Finance",
        
          },
          {
            label:"Products",
        
          },
          {
            label:"Vouchers and Discounts",
        
          },
          {
            label:"Customers",
        
          },
          {
            label:"Customers",
        
          },
          {
            label:"Customers",
        
          }]
  return (
    <div className='flex'>
      <Sidebar items={sideBarItems}/>
      <main className='flex-1 px-36 pt-2 bg-gray-50 flex flex-col items-center overflow-y-auto '>
        {children}
      </main>
    </div>
  )
}

export default Layout
