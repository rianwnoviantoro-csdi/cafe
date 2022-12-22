import React, { Profiler, useState } from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Header from '../header/Private'
import Footer from '../footer/Private'
import Sidebar from '../sidebar/Private'
import { useGetProfileQuery } from '../../redux/features/auth/authApiSlice'
import { useGetAnalyticsQuery } from '../../redux/features/analytic/analyticSlice'

const Private = () => {
  const [darkMode, setDarkMode] = useState(true)
  const { username, isManager, isAdmin } = useAuth()
  const { data: profile, isLoading, isSuccess, isError, error } = useGetProfileQuery()

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode)
  }

  return (
    <>
      <div className={`${darkMode ? 'dark' : 'light'} grid grid-cols-6 transition-colors duration-300`}>
        <Sidebar
          name={profile ? profile.user.name : 'NaN'}
          avatar={profile ? profile.user.avatar : 'https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg'}
          roles={profile ? profile.user.roles : ['']}
          darkMode={darkMode}
        />
        <div className="col-start-2 col-end-7 flex flex-col h-screen justify-between">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} avatar={profile ? profile.user.avatar : 'https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg'} />
          <main className="px-4 pb-4 mb-auto h-screen overflow-y-scroll scrollbar-hide">
            <Outlet context={[profile ? profile.user.name : username]} />
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  )
}

export default Private
