// import styled from 'styled-components'
import {Form, Button} from 'react-bootstrap'


export default function NewsLetterForm() {
    return (
        <div className="container-fluid text-center p-5 home-contact">
            <h3>Sign up for our news letter</h3>
            <Form>
                <Form.Control type='email' placeholder='businessOwner@email.com' className='mb-3'/>
                <Button variant='primary' type='submit'>Sign Up</Button>
            </Form>
        </div>
    )
}