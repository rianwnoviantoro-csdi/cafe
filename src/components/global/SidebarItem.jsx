import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarItem = ({ target, icon, name }) => {
  const activeClass = 'px-8 py-2 flex items-center cursor-pointer text-indigo-500 font-semibold tracking-wider transition duration-300 border-l-4 border-indigo-500'

  return (
    <>
      <NavLink
        to={target}
        className={({ isActive }) =>
          isActive
            ? activeClass
            : 'px-8 py-2 text-sm flex items-center cursor-pointer hover:text-base hover:font-semibold hover:tracking-wider hover:text-indigo-500 hover:border-l-4 hover:border-indigo-500 transition-all duration-300'
        }
      >
        <div className="p-2 rounded-xl mr-2 bg-indigo-200 text-indigo-500 dark:bg-gray-700">{icon}</div>
        <span className="ml-2">{name}</span>
      </NavLink>
    </>
  )
}

export default SidebarItem
