import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h2 className='text-2xl font-semibold bg-white rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
        <div className='flex flex-col gap-6'>
          <div>
            <p className='text-s leading-normal text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptas sit aperiam asperiores porro. Voluptas!
            </p>
          </div>
          <div className='flex justify-between items-center'>
            <button className='bg-blue-500 text-white font-semibold px-6 py-2 rounded-full'>{props.tag}</button>
            <button><i className="bg-blue-500 text-white font-semibold p-3 rounded-full ri-arrow-right-line"></i></button>
          </div>
        </div>
        </div>
  )
}

export default RightCardContent