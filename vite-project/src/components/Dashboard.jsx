import React from 'react'
import { Outlet} from 'react-router-dom'
import { NavBar } from './NavBar'

export const Dashboard = () => {
  return (
    <>
    <NavBar/>
      <div className='banner'>
        <img />
      </div>
     <Outlet/>
    </>
  )
}
