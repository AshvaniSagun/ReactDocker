import { useState, useEffect } from "react";

function Form() {

    const [getFormData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [editItem, setEditItem] = useState(null);
    const [formDataList, setFormDataList] = useState([])

    const addToList = (e) => {
        e.preventDefault() // To prevent page reload on form submit
        setFormDataList([...formDataList, getFormData]);
    }

    const onEditItem = (index) => {
       setEditItem(index)
    }

    const onInputChange = (index, field, value) => {
        const updatedData = [...formDataList];

         updatedData[index] = { ...updatedData[index], [field]: value };
         setFormDataList(updatedData)
    }

    const saveItem = () => {
         setFormDataList([...formDataList])
         setEditItem(null);
    }

    const deleteItem = (index) => {
        const updatedList = [...formDataList]
        const deletedItem = updatedList.filter((_,i) => i !== index)
        setFormDataList(deletedItem);

    }


    return (
        <>
            <form onSubmit={addToList}>
                <label>
                    Name:
                    <input type="text" name="name" value={getFormData.name} onChange={(e) => setFormData({ ...getFormData, [e.target.name]: e.target.value })} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={getFormData.email} onChange={(e) => setFormData({ ...getFormData, [e.target.name]: e.target.value })} />
                </label>
                <button type="submit">Add to list</button>
            </form><br/><br/>

          <div style={{display:'flex', justifyContent:'center'}}>
              <table style={{ border: '1px solid black' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black' }}>
                            Name
                        </th>
                        <th style={{ border: '1px solid black' }}>
                            Email
                        </th>
                         <th style={{ border: '1px solid black' }}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {formDataList.map((resp,index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black' }}>
                                {editItem === index ? (
                                    <input value = {resp.name} onChange={(e) => {onInputChange(index, 'name', e.target.value)}}/> ) : (resp.name)}
                            </td>
                            <td style={{ border: '1px solid black' }}>
                                   {editItem === index ? (
                                    <input value = {resp.email} onChange={(e) => {onInputChange(index, 'email', e.target.value)}}/> ) : (resp.email)}
                            </td>
                             {editItem !== index && <td style={{ border: '1px solid black' }} onClick={() => onEditItem(index)}>
                               <button>Edit</button>
                               <button onClick={() => deleteItem(index)}>Delete</button>
                            </td>}
                             {editItem === index && <td style={{ border: '1px solid black' }} onClick={saveItem}>
                               <button>Save</button>
                            </td>}
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </>
    );
}

export default Form;