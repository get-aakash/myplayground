import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import CustomInput from '../components/CustomInput'


const SignUp = () => {
    const inputs = [
        {
            label: "First Name",
            type: 'text',
            placeholder: "Enter Your First name here..",
            required: true,
        },
        {
            label: "Last Name",
            type: 'text',
            placeholder: "Enter Your Last name here..",
            required: true,
        },
        {
            label: "Email",
            type: 'email',
            placeholder: "Enter Your Email Here..",
            required: true,
        },
        {
            label: "Password",
            type: 'password',
            placeholder: "*****",
            required: true,
        },
        {
            label: "Confirm Password",
            type: 'password',
            placeholder: "*****",
            required: true,
        },
    ]
    return (
        <div className='container w-50 m-auto'>
            <h3 className='text-center py-4 '>SignUp Here !!!</h3>
            <div className=" p-3 py-5 rounded shadow-lg  ">

                <Form>
                    <Col>
                        <Row >
                            {inputs.map((item,i)=><CustomInput key={i} {...item}/>)}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />

                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Row>
                        <Row  >
                            <div className="d-grid mt-5">
                                <Button variant="secondary" type="submit"> SignUp
                                </Button>
                            </div>

                        </Row>
                    </Col>







                </Form>
            </div>
        </div>


    )
}

export default SignUp
