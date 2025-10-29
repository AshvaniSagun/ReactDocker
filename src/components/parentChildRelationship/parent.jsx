import Child from "./child";
import { useState } from 'react';

function Parent () {
   const name = 'Ashvani'
   const [count, setCount] = useState(0)

   const receiveCount = (count) => {
       setCount(count)
   }

   return (
    <>
      <div style={{border: '1px solid black', padding:'4rem'}}> 
       <strong>Parent Component {count}</strong><br/>
      </div>
      <div style={{border: '1px solid black', padding:'4rem'}}> 
       <Child name={name} receiveCount={receiveCount}/>
      </div>
    </> 
   
   )
}

export default Parent;