import React from 'react'
import RightCard from './RightCard'

const RightText = (props) => {
  return (
    <div id='right' className='h-full p-4 w-3/4 gap-10 overflow-x-auto flex rounded-2xl flex-nowrap'>
    {props.users.map(function(elem,idx){

      return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
    })}
    </div>
  )
}

export default RightText