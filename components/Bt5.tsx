import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function B5() {
  return (
    <div className='w-1/4 m-10 flex flex-col gap-5'>
        <div className='w-[60px] bg-red-50 p-2 rounded-full'>
            <div className='bg-red-100 p-2 w-11 rounded-full'>
                <div className='text-red-500 text-center rounded-full border-[3px] border-red-500 w-7'>!</div>
            </div>
        </div>
        <div className='font-semibold text-xl'>Delete blog post</div>
        <div className='text-slate-500'>Are you sure you want to delete this post? This action cannot be undone.</div>
        <div className='mt-3 flex justify-between'>
            <button className='border-2 rounded p-3 pr-16 pl-16 '>Cancel</button> <button className='border-2 rounded p-3 pr-16 pl-16 bg-red-500 text-white'>Delete</button>
        </div>
    </div>
  )
}
