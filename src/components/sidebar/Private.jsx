import { GiftIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import React from 'react'
import SidebarItem from '../global/SidebarItem'

const Private = ({ name, avatar, roles, darkMode }) => {
  const userRolesString = roles.toString().replaceAll(',', ', ')

  return (
    <div className="shadow-sm max-h-screen">
      <div className="bg-white dark:bg-gray-800 flex items-center justify-center h-16">
        <h1 className="text-4xl font-bold text-indigo-500">
          Cafe<span className={darkMode ? 'text-white' : 'text-slate-700'}>.</span>
        </h1>
      </div>
      <div className="h-64 bg-slate-200 dark:bg-gray-700 p-4 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="bg-slate-200 dark:bg-gray-700 h-32 w-32 rounded-full ring-4 ring-indigo-500">
            <img className="object-contain h-32 w-32 rounded-full" src={avatar} alt="avatar" />
          </div>
          <div className="mt-2 text-lg t text-indigo-500 font-semibold tracking-wide capitalize">{name}</div>
          <span className="text-sm text-green-500 tracking-widest">{userRolesString}</span>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 h-[calc(100%-20rem)] overflow-y-scroll scrollbar-hide py-4">
        <ul>
          <SidebarItem target="/dashboard" icon={<HomeIcon className="h-5 w-5" />} name="Dashboard" />

          <li className="px-8 mt-8 mb-2 text-xs text-gray-400 font-semibold tracking-widest capitalize">Data</li>
          <SidebarItem target="/users" icon={<UserGroupIcon className="h-5 w-5" />} name="Manage Team" />
          <SidebarItem target="/products" icon={<GiftIcon className="h-5 w-5" />} name="Manage Product" />

          <li className="px-8 mt-8 mb-2 text-xs text-gray-400 font-semibold tracking-widest capitalize">Setting</li>
          <SidebarItem target="/users" icon={<UserGroupIcon className="h-5 w-5" />} name="Manage Team" />
          <SidebarItem target="/products" icon={<GiftIcon className="h-5 w-5" />} name="Manage Product" />
        </ul>
      </div>
    </div>
  )
}

export default Private
