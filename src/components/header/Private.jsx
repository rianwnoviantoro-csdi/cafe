import React, { useEffect, Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSendLogoutMutation } from '../../redux/features/auth/authApiSlice'
import { Tooltip } from '@material-tailwind/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Private = ({ darkMode, toggleDarkMode, avatar }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [sendLogout, { isLoading, isSuccess, isError, error }] = useSendLogoutMutation()

  useEffect(() => {
    if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  return (
    <Disclosure as="header">
      {({ open }) => (
        <>
          <div className="px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="">
                {/* <input
                  type="text"
                  className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-inset"
                  placeholder="Search..."
                /> */}
                <h1 className="text-2xl font-semibold capitalize">{location.pathname.replace('/', '')}</h1>
              </div>
              <div className="flex items-center justify-around">
                <Menu as="div">
                  <Menu.Button>
                    {darkMode ? <SunIcon className="h-6 w-6 cursor-pointer" onClick={toggleDarkMode} /> : <MoonIcon className="h-6 w-6 cursor-pointer" onClick={toggleDarkMode} />}
                  </Menu.Button>
                  {/* <Tooltip content="Logout">
                    <Menu.Button className="ml-2">
                      <ArrowRightOnRectangleIcon onClick={sendLogout} className="h-6 w-6 cursor-pointer" />
                    </Menu.Button>
                  </Tooltip> */}
                </Menu>
                <Menu as="div" className="ml-4">
                  <Menu.Button>
                    <img className="ring-2 ring-indigo-500 object-contain h-6 w-6 rounded-full" src={avatar} alt="" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="p-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link to="/dashboard" className={classNames(active ? 'bg-gray-100 dark:bg-gray-600 rounded' : '', 'w-full block px-4 py-2 text-sm cursor-pointer rounded')}>
                              Setting
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div onClick={sendLogout} className={classNames(active ? 'bg-gray-100 dark:bg-gray-600 rounded' : '', 'w-full block px-4 py-2 text-sm cursor-pointer rounded')}>
                              Logout
                            </div>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default Private
