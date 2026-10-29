// import React, { useState } from 'react'


// const App = () => {

//   const [num, setNum] = useState(0)

//   function increaseNum(){
//     // console.log('increasingggggg');
//     setNum(num+1)
//   }

//   function decreaseNum(){
//     //console.log('decreasinggg');
//     setNum(num-1)
//   }
//   return (
//     <div>
//       <h2>{num}</h2>
//       <button onClick={increaseNum}>Increase</button>
//       <button onClick={decreaseNum}>Decrease</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(10)
  function btnClicked(){
    setNum(prev=>prev+1)
    setNum(prev=>prev+1)
    setNum(prev=>prev+1)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App