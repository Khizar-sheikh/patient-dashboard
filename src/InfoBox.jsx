import React from 'react'

function InfoBox({ color, title, data }) {

  return (
    <div className='h-[150px] pt-[14px]'>
      <div className='flex gap-2 items-center'>
        <div className={`h-3 w-3 rounded-lg ${color} `}></div>
        <div className=' text-sm font-semibold font-sans '>{title}</div>
      </div>
      <div className='font-sans font-semibold text-3xl py-4'>
        {data.value}
      </div>
      <div className='flex items-center text-xs font-semibold '>
        {data.levels === "Lower than Average" ? <div>&#x25BC;</div> : <div>&#x25B2;</div>} <span className='pl-1'>{data.levels}</span>
      </div>
    </div>
  )
}

export default InfoBox
