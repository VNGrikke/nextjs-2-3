import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function B1() {
    return (
        <div className='w-2/12 flex flex-col bg-slate-300 gap-2 '>
            <label className='text-blue-600 pl-4'>label</label>
            <input className='ml-4 h-8 pl-4 w-11/12 rounded focus:border-blue-600' type="text" placeholder='Placeholder' />
            <FontAwesomeIcon className='h-4 absolute left-[220px] top-[40px]' icon={faEye} />
            <div className='pl-4'>Helper text</div>
        </div> 
    )
}
