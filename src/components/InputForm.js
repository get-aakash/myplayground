import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import CustomInput from './CustomInput'

const InputForm = () => {
    const inputs = [
        {
            type:'text',
            placeholder: "Enter Your ToDo here ...",
            required: true
        },
        {
            type: 'date',
            required: true
        }
    ]
    return (
        <Form className=' '>
            <Col>
                <Row className='mt-5'>
                        {inputs.map((item,i)=><CustomInput key={i} {...item}/>)}

                </Row>
                
                <Row className='mt-2' >
                <Button variant="secondary" type="submit">Create</Button>
                </Row>
            </Col>

           
            
                
            
        </Form>
    )
}

export default InputForm
