import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import CustomInput from './CustomInput'

const InputForm = () => {
    const inputs = [
        {
            name:'todo',
            type:'text',
            placeholder: "Enter Your ToDo here ...",
            required: true
        },
        {
            name:'date',
            type: 'date',
            required: true
        }
    ]
    const [formData, setFormData] = useState([])

    const handleOnChange = (e)=>{
       const {name, value} = e.target
       setFormData({...formData,[name]: value})
       
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
    }
    return (
        <Form onSubmit={handleOnSubmit}>
            <Col>
                <Row className='mt-5'>
                        {inputs.map((item,i)=><CustomInput key={i} {...item} onChange={handleOnChange}/>)}

                </Row>
                
                <Row className='mt-2' >
                <Button variant="secondary" type="submit">Create</Button>
                </Row>
            </Col>

           
            
                
            
        </Form>
    )
}

export default InputForm
