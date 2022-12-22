import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../src/pages/auth/Login'
import Public from './components/layout/Public'
import Private from './components/layout/Private'
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
import PersistLogin from './redux/features/auth/PersistLogin'
import RequireAuth from './redux/features/auth/RequireAuth'
import { ROLES } from './config/roles'
import Prefetch from './redux/features/auth/Prefetch'

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />

      {/* Home */}
      <Route path="/" element={<Public />}>
        <Route index element={<Home />} />
      </Route>

      {/* Dashboard */}
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
          <Route element={<Prefetch />}>
            <Route path="/dashboard" element={<Private />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
