import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faSortDown } from '@fortawesome/free-solid-svg-icons'
export default function B2() {
  return (
    <div className='w-[320px] bg-blue-100 mt-[20px] pb-[5px] border-black'>
      <div className='px-[10px] py-[4px]'>input label</div>
      <input className='w-[300px] ml-[10px] pl-[24px]' type="text" />
      <FontAwesomeIcon className='h-4 absolute top-[152px] left-[15px]' icon={faClock} />
      <FontAwesomeIcon className='h-4 absolute top-[148px] left-[295px] cursor-pointer' icon={faSortDown} />
      <div className='m-3 pb-[10px] bg-white'>
        <div className='flex justify-between px-[10px] py-[4px]'>
          <label htmlFor="">di ngu</label>
          <input type="checkbox" id="" />
        </div>
        <div className='flex justify-between px-[10px] py-[4px]'>
          <label htmlFor="">di choi</label>
          <input type="checkbox" id="" />
        </div>
        <div className='flex justify-between px-[10px] py-[4px]'>
          <label htmlFor="">hoc lai</label>
          <input type="checkbox" id="" />
        </div>
        <div className='flex justify-between px-[10px] py-[4px]'>
          <label htmlFor="">cung la hoc lai nhung la mon khac</label>
          <input type="checkbox" id="" />
        </div>
        <div className='flex justify-evenly'>
          <button className='py-[4px] px-[8px] rounded border border-blue-600 cursor-pointer'>clear</button>
          <button className='bg-blue-600 text-white py-[4px] px-[8px] rounded cursor-pointer'>apply</button>
        </div>
      </div>
    </div>
  )
}
