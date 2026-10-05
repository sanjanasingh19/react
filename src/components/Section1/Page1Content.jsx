import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    <div className='py-3 h-[86vh] px-18 flex items-center gap-10 justify-between'>
        <LeftText/>
        <RightText users={props.users}/>
    </div>
  )
}

export default Page1Content