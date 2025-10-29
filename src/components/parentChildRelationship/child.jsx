import { useState } from "react";
function Child (props) {

const [count, setCount] = useState(0)

const incrementCounter = () => {
    const latestCount = count + 1;
     setCount(latestCount)
     props.receiveCount(latestCount)
}

   return (
    <>
    Hello Child {props.name}<br/><br/>
    <button type="button" onClick={incrementCounter}>Increment Counter</button>
    {count}
    </> 
   )
}

export default Child;