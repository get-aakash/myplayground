import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DisplayTable = ({ todos, handleOnDelete, handleUpdate }) => {
  const [completed, setCompleted] = useState(Array(todos.length).fill(false))
 

  const handleSwitchChange = (index) => {
    const newCompleted = [...completed];
    newCompleted[index] = !newCompleted[index];
    setCompleted(newCompleted);
  };

 

  return (
    <div className=''>
      <h3 className='text-center py-3'>Your list of Todos are here!!!</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>status</th>
            <th>#</th>
            <th>ToDOs</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, i) => (
            <tr key={i}>
              <td><Form.Group >
          
          <Form.Check
          
            type="checkbox"
           
            checked={completed[i]}
            onChange={()=>handleSwitchChange(i)}
            
          />
        </Form.Group></td>
              <td className={completed[i] ? 'line-through' : ''} >{i + 1}</td>
              <td className={completed[i] ? 'line-through' : ''}>{item.todo}</td>
              <td className={completed[i] ? 'line-through' : ''}>{item.date}</td>
              <td> <Button disabled={completed[i]} onClick={() => handleUpdate(item)} variant='success' title='update'><i className="fa-solid fa-pen-to-square"></i></Button><Button variant="danger" disabled={completed[i]} onClick={() => handleOnDelete(i)} title='Delete' ><i className="fa-solid fa-trash"></i></Button></td>
            </tr>
          ))}



        </tbody>
      </Table>

    </div>
  )
}

export default DisplayTable
