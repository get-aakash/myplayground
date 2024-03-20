import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import CustomInput from './CustomInput'
import DisplayTable from './DisplayTable'
import { toast } from 'react-toastify'


const initialState = {
    todo:"",
    date: ""
}
const InputForm = () => {
    
    
    const [formData, setFormData] = useState({})
    const [todos, setTodos] = useState([])
    const [selectedItem, setSelectedItem] = useState(null)


    const handleOnDelete = (id)=>{
        if(window.confirm("Are you sure to Delete this ToDO")){
            const data = todos.filter((item,i)=>i!==id)
        setTodos(data)
        toast.success("The ToDo has been deleted")
        }
        
    }
    const handleUpdate = (item)=>{
        setSelectedItem(item)
        
        setFormData({
            todo: item.todo,
            date: item.date,
            id: item.id
            
        })
        

     }
     const updateData = (e)=>{
        e.preventDefault()
        console.log(formData)
        console.log(todos)
        const updatedList = todos.map(item =>
            item.id === formData.id ? { ...item, todo: formData.todo, date: formData.date } : item
          );
          setFormData(initialState)
          setTodos(updatedList)
          setSelectedItem(null)
     }
   
    const handleOnChange = (e)=>{
       const {name, value} = e.target
       setFormData({...formData, [name]: value})
       
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault() 
       
        setFormData(initialState)
        const obj = { ...formData, createdAt: Date.now(), id: Math.random()}
        setTodos([...todos,obj])
        console.log(todos)
        toast.success("The ToDO has been created")
        
        
    }
    const inputs = [
        {
            value: formData.todo,
            name:'todo',
            type:'text',
            placeholder: "Enter Your ToDo here ...",
            required: true
        },
        {
            value: formData.date,
            name:'date',
            type: 'date',
            required: true
        }
    ]
    console.log(todos)
    return (
        <div>
            {selectedItem?(<Form onSubmit={updateData}  >
            <Col>
                <Row className='mt-5'>
                        {inputs.map((item,i)=><CustomInput key={i} {...item} onChange={handleOnChange}/>)}

                </Row>
                
                <Row className='mt-2' >
                <Button variant="secondary" type="submit">Update</Button>
                </Row>
            </Col>

           
            
                
            
        </Form>):(<Form onSubmit={handleOnSubmit}>
            <Col>
                <Row className='mt-5'>
                        {inputs.map((item,i)=><CustomInput key={i} {...item} onChange={handleOnChange}/>)}

                </Row>
                
                <Row className='mt-2' >
                <Button variant="secondary" type="submit">Create</Button>
                </Row>
            </Col>

           
            
                
            
        </Form>) }
            
        <hr className='py-1 bg-dark' />
        <div className='p-2 text-center'>
            
                    <DisplayTable todos={todos} handleUpdate={handleUpdate} handleOnDelete={handleOnDelete} />
                </div>

        </div>
        

    )
}

export default InputForm
