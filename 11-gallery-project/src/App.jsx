import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
const App = () => {

  const [userData, setUserData] = useState([]);
  const[index,setIndex]=useState(1);
  const getData = async () => {
    const response = await axios.get(`http://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
    console.log(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Loading... </h3>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <a href={elem.url}>
          <div className='h-40 w-44 bg-white rounded-xl'>
            <img className='h-full w-full overflow-hidden object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto text-white h-screen p-4'>
      {/* <button
        onClick={getData}
        className='bg-green-600 active:scale-95 px-5 py-2 rounded text-white'>
        GetData
      </button> */}
      <div className='flex flex-wrap gap-10'>
        {/* <h1 className='fixed text-xl bg-red-400 overflow-hidden'>{index}</h1> */}
        <div className='flex h-[82%] flex-wrap gap-4 p-2'>
          {printUserData}
        </div>
      </div>
      <div className='flex justify-center gap-6 items-center'>
        <button 
        style={{opacity:index==1?0.5:1}}
        className='bg-amber-300 text-black rounded active:scale-95 cursor-pointer px-4 py-2 text-sm 
        font-semibold'
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}
        >
          Prev
        </button>
        <h4>Page{index}</h4>
        <button className='bg-amber-300 text-black active:scale-95 cursor-pointer rounded px-4 py-2 text-sm 
        font-semibold'
        onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App