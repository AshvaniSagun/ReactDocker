import { useState } from "react";

function useStorageHook () {

  const [input, setInput] = useState(localStorage.getItem('Key'));

  const takeInput = (e) => {
    setInput(e.target.value)
  }
  const SaveToLocalStorage = () => {
    localStorage.setItem('Key', input)
  }
 
  return [input, takeInput, SaveToLocalStorage];
      
}

export default useStorageHook;