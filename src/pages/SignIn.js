import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import CustomInput from '../components/CustomInput'

const SignIn = () => {
    const inputs = [
        {
            label: "Email",
            placeholder: "Enter Your Email Here...",
            required: true,
            type: "email",
        },
        {
            label: "Password",
            placeholder: "*******",
            required: true,
            type: "password"
        }
    ]
    return (
        <div className='container w-50 m-auto'>
            <h3 className='text-center py-4 '>SignIn Here !!!</h3>
            <div className=" p-3 py-5 rounded shadow-lg  ">

                <Form>
                    <Col>


                        <Row >
                            {inputs.map((item,i)=><CustomInput key={i} {...item}/>)}
                            
                        </Row>
                     
                        <Row>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Row>

                        <Row  >
                            <div className="d-grid mt-5">
                                <Button variant="secondary" type="submit"> SignIn
                                </Button>
                            </div>

                        </Row>
                    </Col>







                </Form>
            </div>
        </div>

    )
}

export default SignIn
