import { useEffect,useState } from 'react';

function FetchData () {

  const [data,setData] = useState([]);
  const [editData, setEditData] = useState(null);
   
     useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts').then((resp) => resp.json()).then((data) => {
    setData(data)
   })

  },[])

  const onEditButtonClick = (index) => {
    setEditData(index)
  }

  const handleEditInput = (index, field, value) => {
    const updatedData = [...data];
    updatedData[index] = {...updatedData[index], [field] : value}
    setData(updatedData)

  }

  const onSaveButtonClick = () => {
    setData([...data])
    setEditData(null);
  }

   const onDeleteButtonClick = (index) => {
      const updatedData = [...data];
      const deletedItem = updatedData.filter((_,i) => i !== index)
      setData(deletedItem)
  }

  return (
       <table style={{border: '1px solid black'}}>
          <thead>
             <tr>
              <th style={{border: '1px solid black'}}>ID </th>
              <th style={{border: '1px solid black'}}>USER ID </th>
              <th style={{border: '1px solid black'}}>Title</th>
              <th style={{border: '1px solid black'}}>Body</th>
             </tr>
          </thead>
          <tbody>
             {data.map((value, index) => (
              <tr key={index}>
               <td style={{border: '1px solid black', width: '2rem'}}>
                {editData === index ? 
                (<input type = "text" value={value.id} onChange={(e)=> handleEditInput(index, 'id', e.target.value)}/>) : (value.id)}
                
               </td>
                 <td style={{border: '1px solid black', width: '2rem'}}>
                   {editData === index ? 
                (<input type = "text" value={value.userId} onChange={(e)=> handleEditInput(index, 'userId', e.target.value)}/>) : (value.userId)}
                  </td>
                   <td style={{border: '1px solid black', width: '20rem'}}>
                    {editData === index ? 
                (<input type = "text" value={value.title} onChange={(e)=> handleEditInput(index, 'title', e.target.value)}/>) : (value.title)}
                    </td>
                     <td style={{border: '1px solid black', width: '20rem'}}>
                      {editData === index ? 
                (<input type = "text" value={value.body} onChange={(e)=> handleEditInput(index, 'body', e.target.value)}/>) : (value.body)}
                     </td>
                     {editData !== index && <td><button onClick={() => onEditButtonClick(index)}>Edit</button></td>}
                     {editData === index && <td><button onClick={onSaveButtonClick}>Save</button></td>}
                     {editData !== index && <td><button onClick={() => onDeleteButtonClick(index)}>Delete</button></td>}
             </tr>
             ))}
          </tbody>
       </table>
  )

}

export default FetchData;