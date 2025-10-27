import { useState, useEffect } from 'react';

function Practice () {

    const [input, setInput] = useState('');
    const [inputDataList, setInputDataList] = useState([]);
    const [isEdit, setIsEdit] = useState(null);
    console.log(inputDataList)

    const addItem = () => {
        const itemList = [...inputDataList, input];
        setInputDataList(itemList)
    }

    const onEdit = (index) => {
        
         setIsEdit(index)
    }

    const onEditInput = (index, value) => {
        const updatedList = [...inputDataList];
        updatedList[index] = value;
        setInputDataList(updatedList)
    }

    const onSave = () => {
      const updatedList  = [...inputDataList];
      setInputDataList(updatedList)
      setIsEdit(null)
    }

    const onDeleteItem = (index) => {
   const updatedList = inputDataList.filter((_, i) => i !== index);
  setInputDataList(updatedList);
    }

    return (

        <>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type='button' onClick={addItem}>Add Data</button><br/><br/><br/>

        { inputDataList.map((val,index) => (
            <div key={index}>
                {isEdit === index ? (
                   <input type='text' value={val} onChange={(e) => onEditInput(index, e.target.value)}/>
                ) : (
                    <span>
                    {val}
                </span>
                )}
                
                <button onClick={() => onEdit(index)}>Edit</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => onSave()}>Save</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => onDeleteItem(index)}>Delete</button>
            </div>
        ))}
        </>
    )

}


export default Practice;