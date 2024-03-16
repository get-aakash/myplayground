import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DisplayTable = () => {
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
        <tr>
          <td>1</td>
          <td>Your Todo Here...</td>
          <td>4/10/2024</td>
          <td><Link to='/update/:id'><Button><i className="fa-solid fa-pen-to-square"></i></Button></Link><Button variant="danger"><i className="fa-solid fa-trash"></i></Button></td>
        </tr>
        
        
      </tbody>
    </Table>
      
    </div>
  )
}

export default DisplayTable
