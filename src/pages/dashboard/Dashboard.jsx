import { ArchiveBoxIcon, CurrencyDollarIcon, ExclamationCircleIcon, GiftIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useOutletContext } from 'react-router-dom'
import Table from '../../components/global/Table'
import useTitle from '../../hooks/useTitle'
import { useGetAnalyticsQuery } from '../../redux/features/analytic/analyticSlice'

const Dashboard = () => {
  const [year, setYear] = useState(2022)
  const [username] = useOutletContext()

  const { data: analytic, isLoading, isSuccess, isError, error } = useGetAnalyticsQuery(year)

  useTitle(`Cafe`)

  return (
    <>
      <div className="bg-indigo-500 p-2 rounded-lg shadow-sm mt-4">
        <h1 className="text-xl text-white font-semibold tracking-wide capitalize">Welcome aboard {username}!</h1>
      </div>
      <div className="mt-4 flex items-center justify-end">
        <label htmlFor="year" className="text-lg font-semibold tracking-wide capitalize mr-2">
          Year:
        </label>
        <select id="year" className="font-semibold dark:bg-slate-600 px-1 py-1 rounded-lg shadow-sm" value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="relative bg-gradient-to-r from-green-300 to-green-400 w-full h-32 rounded-lg p-2 overflow-hidden shadow-sm">
          <h1 className="absolute inset-x-3 top-0 z-20 text-[2rem] text-white font-bold tracking-wide">Users</h1>
          <div className="flex justify-end items-end">
            <UserGroupIcon className="absolute inset-x-4 -bottom-10 h-40 text-green-400" />
            <div className="mt-4 z-10 text-[5rem] font-semibold tracking-wide text-white">{analytic ? analytic.users.count : 0}</div>
          </div>
        </div>
        <div className="relative bg-gradient-to-r from-blue-300 to-blue-400 w-full h-32 rounded-lg p-2 overflow-hidden shadow-sm">
          <h1 className="absolute inset-x-3 top-0 z-20 text-[2rem] text-white font-bold tracking-wide">Products</h1>
          <div className="flex justify-end items-end">
            <GiftIcon className="absolute inset-x-4 -bottom-10 h-40 text-blue-400" />
            <div className="mt-4 z-10 text-[5rem] font-semibold tracking-wide text-white">{analytic ? analytic.products.count : 0}</div>
          </div>
        </div>
        <div className="relative bg-gradient-to-r from-red-300 to-red-400 w-full h-32 rounded-lg p-2 overflow-hidden shadow-sm">
          <h1 className="absolute inset-x-2 top-0 z-20 text-[2rem] text-white font-bold tracking-wide">Categories</h1>
          <div className="flex justify-end items-end">
            <ArchiveBoxIcon className="absolute inset-x-4 -bottom-10 z-10 h-40 text-red-400" />
            <div className="mt-4 z-10 text-[5rem] font-semibold tracking-wide text-white">{analytic ? analytic.categories.count : 0}</div>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-600 rounded-lg p-2 shadow-sm">
          <h1 className="text-xl font-semibold tracking-wide">Users per month</h1>
          <div className="mt-2">
            <Table />
          </div>
        </div>
        <div className="bg-white dark:bg-slate-600 rounded-lg p-2 shadow-sm">
          <h1 className="text-xl font-semibold tracking-wide">Products per month</h1>
          <div className="mt-2">
            <Table />
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white dark:bg-slate-600 rounded-lg p-2 shadow-sm">
        <h1 className="text-xl font-semibold tracking-wide">Users per month</h1>
        <div className="mt-2">
          <Table />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-600 rounded-lg p-2 shadow-sm">
          <h1 className="text-xl font-semibold tracking-wide">Users per month</h1>
          <div className="mt-2">
            <Table />
          </div>
        </div>
        <div className="col-span-2 bg-white dark:bg-slate-600 rounded-lg p-2 shadow-sm">
          <h1 className="text-xl font-semibold tracking-wide">Products per month</h1>
          <div className="mt-2">
            <Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
