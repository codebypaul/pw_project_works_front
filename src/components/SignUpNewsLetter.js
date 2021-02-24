import {Form, Button} from 'react-bootstrap'


export default function NewsLetterForm() {
    return (
        <div className="container-fluid text-center p-5">
            <h1 className='p-5'>We want you to help build your business!</h1>
            <h3>Sign up for our news letter</h3>
            <Form>
                <Form.Control type='email' placeholder='businessOwner@email.com' className='mb-5'/>
                <Button variant='primary' type='submit'>Sign Up</Button>
            </Form>
        </div>
    )
}