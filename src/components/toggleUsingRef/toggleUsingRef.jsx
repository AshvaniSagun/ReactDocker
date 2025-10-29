import {useRef} from 'react';

function ToggleUsingRef () {

    const inputRef = useRef(null);
    const outputRef = useRef(null);

    const handleClick = () => {
        if(inputRef.current && outputRef.current) {
            outputRef.current.textContent = inputRef.current.value;
            const value = inputRef.current.value;
           
            if(value.length <= 3) {
                outputRef.current.style.backgroundColor = 'red';
            }else if(value.length <= 10) {
                outputRef.current.style.backgroundColor = 'yellow';
            } else {
                outputRef.current.style.backgroundColor = 'orange';
            }

        }
    }

    return (
        <>
         <input type="text" ref={inputRef} onChange={handleClick}/>
         <div ref={outputRef} style={{padding:'10rem', border: '1px solid black'}}></div>
        </>
    )
}

export default ToggleUsingRef;