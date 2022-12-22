import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { store } from '../../store'
import { usersApiSlice } from '../users/usersApiSlice'

const Prefetch = () => {
  useEffect(() => {
    store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { focus: true }))
  }, [])

  return <Outlet />
}

export default Prefetch
