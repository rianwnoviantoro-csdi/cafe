import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Public'

const Public = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl my-8">
        <Outlet />
      </div>
    </>
  )
}

export default Public
