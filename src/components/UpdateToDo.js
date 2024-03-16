import React from 'react'
import DefaultLayout from './layout/DefaultLayout'
import { Button, Col, Form, FormControl, Row } from 'react-bootstrap'
import { type } from '@testing-library/user-event/dist/type'
import CustomInput from './CustomInput'

const UpdateToDo = () => {
  const inputs = [
    {
      type: "text",
      placeholder: "Edit your ToDo here ...",
      required: true,
    },
    {
      type: "date",
      required: true
    }
    

  ]
  return (
    <DefaultLayout>
      <h3 className='text-center mt-3'>Update Your ToDo here ...</h3>
      <Form className=' w-50 m-auto'>
    <Col>
    <Row className='mt-5'>
      {inputs.map((item,i)=><CustomInput key={i} {...item} />)}

    </Row>
    <Row>
      <Button variant='secondary'>Edit</Button>
    </Row>
        
    </Col>

        

      </Form>
    </DefaultLayout>
  )
}

export default UpdateToDo
