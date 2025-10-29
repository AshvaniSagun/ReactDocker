import { useState } from "react";

function Counter () {
    const [counter, setCounter] = useState(null);

    const decrementCounter = () => {
        if(counter === 0 ) { // Does not allow the counter to go below 0 
            return
        }
        setCounter(counter - 1);
    }

    return (
       <>
        <p>{counter}</p>
        <button type="button"  onClick={() => setCounter(counter + 1)}>Increment Counter</button>

         <button type="button"  onClick={decrementCounter}>Decrement Counter</button>
       </>
    )
}

export default Counter;