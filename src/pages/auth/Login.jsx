import React, { useEffect, useRef, useState } from 'react'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { PulseLoader } from 'react-spinners'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'
import { useLoginMutation } from '../../redux/features/auth/authApiSlice'
import { setCredentials } from '../../redux/features/auth/authSlice'

const Login = () => {
  useTitle('Employee Login')

  const userRef = useRef()
  const errorRef = useRef()
  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [persist, setPersist] = useState()
  const [login, { isLoading }] = useLoginMutation()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setError('')
  }, [usernameOrEmail, password])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { accessToken } = await login({
        usernameOrEmail,
        password
      }).unwrap()

      dispatch(setCredentials({ accessToken }))
      setUsernameOrEmail('')
      setPassword('')
      navigate('/dashboard')
    } catch (error) {
      setError(error.data?.message)
      errorRef.current.focus()
    }
  }

  const handleUserInput = (event) => setUsernameOrEmail(event.target.value)
  const handlePasswordInput = (event) => setPassword(event.target.value)
  const handleToggle = (event) => setPersist(event.target.value)
  const errorMessage = error.split('. ')

  if (isLoading) return <PulseLoader color={'#6366f1'} />

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex justify-center items-center">
            <div className="h-16 w-16 bg-indigo-50 rounded-2xl p-2">
              <UserGroupIcon className="text-indigo-400" />
            </div>
          </div>
          <h1 className="text-xl text-slate-700 text-center font-semibold tracking-widest">Employee Login</h1>
          <div className="my-4 text-xs text-red-500 text-center tracking-wide">
            {errorMessage.map((message, index) => (
              <div key={index} ref={errorRef} aria-live="assertlive">
                {message}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="grid grid-cols-6 gap-4 items-center my-2">
              <label htmlFor="usernameOrEmail" className="text-slate-700 font-semibold col-start-1 col-end-3">
                Username or email
              </label>
              <div className="col-start-3 col-end-7">
                <input
                  ref={userRef}
                  value={usernameOrEmail}
                  onChange={handleUserInput}
                  id="usernameOrEmail"
                  type="text"
                  className="w-full px-4 py-2 text-slate-700 bg-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:ring-inset"
                  placeholder="Username or email"
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 items-center my-2">
              <label htmlFor="password" className="text-slate-700 font-semibold col-start-1 col-end-3">
                Password
              </label>
              <div className="col-start-3 col-end-7">
                <input
                  value={password}
                  onChange={handlePasswordInput}
                  id="password"
                  type="password"
                  className="w-full px-4 py-2 text-slate-700 bg-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:ring-inset"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 items-center my-2">
              <div className="col-start-3 col-end-7">
                <label htmlFor="persist" className="text-slate-700 font-semibold">
                  <input checked={persist} onChange={handleToggle} id="persist" type="checkbox" className="mr-2 px-4 py-2" placeholder="" />
                  Trust this device
                </label>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button className="w-1/2 px-4 py-1 text-white font-semibold rounded-md bg-indigo-500 tracking-widest">Login</button>
            </div>
          </form>
        </div>
        <Link to="/" className="mt-2 text-xs text-slate-500 tracking-widest">
          {'<<'} Go back
        </Link>
      </div>
    </>
  )
}

export default Login
