import useStorageHook from './storageHook';

function Storage () {
const [input, takeInput, SaveToLocalStorage] = useStorageHook()

    return (

        <>
          <input type="text" value={input} onChange={takeInput}/>
          <button type="button" onClick={SaveToLocalStorage}>SaveInput</button>
        </>
    )

}

export default Storage;