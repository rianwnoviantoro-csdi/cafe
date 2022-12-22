import React from 'react'

const Table = () => {
  return (
    <>
      <table className="w-full table-fixed overflow-x-scroll">
        <thead className="text-xs font-bold uppercase dark:text-slate-200 bg-slate-200 dark:bg-slate-800">
          <tr>
            <th className="p-2 font-semibold text-left tracking-widest">No</th>
            <th className="p-2 font-semibold text-left tracking-widest">Fullname</th>
            <th className="p-2 font-semibold text-left tracking-widest">No</th>
            <th className="p-2 font-semibold text-left tracking-widest">No</th>
            <th className="p-2 font-semibold text-left tracking-widest">No</th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-slate-100 dark:text-slate-700">
          <tr>
            <td className="p-2 font-semibold dark:text-slate-100">1.</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Table
