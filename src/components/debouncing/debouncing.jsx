import { useState, useEffect } from "react";

function DebounceSearch(){
   const [input, setInput] = useState('');
   const [debounceSearch, setDebounceSearch] = useState('');

   useEffect(() => {

    const handler = setTimeout(() => {
      setDebounceSearch(input);
    },3000)

return () => clearTimeout(handler)
   },[input])
   
   return (
    <>
      <input type ="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type to search"/><br/><br/>
       Search Term : {debounceSearch}
    </>
   )
}
export default DebounceSearch;