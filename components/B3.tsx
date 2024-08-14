import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function B3() {
  return (
    <div className='flex flex-col w-3/12 m-10'>
        <strong className='text-4xl mb-10'> Form Sign up</strong>
        <div className='flex flex-col mb-5'>
          <label className='font-semibold' htmlFor="">Name</label>
          <input className='border-2 p-1 rounded' type="text" id="" placeholder="Your name" />
        </div>
        <div className='flex flex-col mb-5'>
          <label className='font-semibold' htmlFor="">Email</label>
          <input className='border-2 p-1 rounded' type="email" placeholder='you@company.com' />
        </div>
        <div className='flex flex-col mb-5'>
          <label className='font-semibold' htmlFor="">Phone number</label>
          <input className='border-2 p-1 rounded relative pl-16' type="tel" name="" id="" placeholder='+84 (123) 456-789'/>
          <span className='absolute top-[794px] left-16'>US</span>
          <FontAwesomeIcon className='absolute w-4 top-[798px] left-[90px]' icon={faChevronDown}></FontAwesomeIcon>
        </div>
        <div className='flex flex-col mb-5'>
          <label className='font-semibold' htmlFor="">Address</label>
          <textarea className='border-2 p-1 rounded' name="" id=""></textarea>
        </div>
        <div>
          <label className='font-semibold' htmlFor="">Skills</label>
          <div className='flex gap-10'>
            <div>
              <div>
                <input type="checkbox" className='mr-2' name="" id="" />
                <label htmlFor="">HTML</label>
              </div>
              <div>
                <input type="checkbox" className='mr-2' name="" id="" />
                <label htmlFor="">UX design</label>
              </div>
              <div>
                <input type="checkbox" className='mr-2' name="" id="" />
                <label htmlFor="">CSS</label>
              </div>
            </div>
            <div>
              <div>
                <input type="checkbox" className='mr-2' name="" id="" />
                <label htmlFor="">JavaScript</label>
              </div>
              <div>
                <input type="checkbox" className='mr-2' name="" id="" />
                <label htmlFor="">ReactJS</label>
              </div>
              <div>
                <input type="checkbox" className='mr-2' name="" id="" />
                <label htmlFor="">Java</label>
              </div>
            </div>
          </div>
        </div>
        <button className='mt-5 text-white bg-purple-600 rounded p-1'>Sign up</button>
    </div>
  )
}
