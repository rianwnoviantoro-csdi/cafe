import React from 'react'

const Private = () => {
  const date = new Date()
  const today = new Intl.DateTimeFormat('id', { dateStyle: 'medium', timeStyle: 'short' }).format(date)

  return (
    <div className="border-t border-slate-200 dark:border-slate-700 p-2">
      <div className="grid grid-cols-2 items-center">
        <div className="text-slate-400 text-xs"> Copyright 2022</div>
        <div className="text-right text-slate-400 text-xs">{today}</div>
      </div>
      {/* <div className="p-2 border-slate-200 flex justify-center">
        <div className="text-slate-400 text-xs border-t ">{today}</div>
        <div className="text-slate-400 text-xs border-t ">{today}</div>
      </div> */}
    </div>
  )
}

export default Private
