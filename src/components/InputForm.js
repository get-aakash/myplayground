import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import CustomInput from './CustomInput'
import DisplayTable from './DisplayTable'
import { toast } from 'react-toastify'

let globalId = 0
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
    
    const [formData, setFormData] = useState({})
    const [todos, setTodos] = useState([])


    const handleOnDelete = (id)=>{
        if(window.confirm("Are you sure to Delete this ToDO")){
            const data = todos.filter((item,i)=>i!==id)
        setTodos(data)
        toast.success("The ToDo has been deleted")
        }
        
    }
    const handleOnChange = (e)=>{
       const {name, value} = e.target
       setFormData({...formData, [name]: value})
       
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()  
        globalId = globalId + 1
        setTodos([...todos, formData])
        toast.success("The ToDO has been created")
        
        
    }
    console.log(todos)
    return (
        <div>
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
        <hr className='py-1 bg-dark' />
        <div className='p-2 text-center'>
            
                    <DisplayTable todos={todos} handleOnDelete={handleOnDelete} />
                </div>

        </div>
        

    )
}

export default InputForm
