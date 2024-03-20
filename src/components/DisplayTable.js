import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DisplayTable = ({todos, handleOnDelete, handleUpdate}) => {
  
  return (
    <div className=''>
        <h3 className='text-center py-3'>Your list of Todos are here!!!</h3>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>ToDOs</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((item,i)=>(
           <tr key={i}>
           <td>{i+1}</td>
           <td>{item.todo}</td>
           <td>{item.date}</td>
           <td> <Button onClick={()=>handleUpdate(item)} variant='success' title='update'><i className="fa-solid fa-pen-to-square"></i></Button><Button variant="danger" onClick={()=>handleOnDelete(i)} title='Delete' ><i className="fa-solid fa-trash"></i></Button></td>
         </tr>
        ))}
       
        
        
      </tbody>
    </Table>
      
    </div>
  )
}

export default DisplayTable
