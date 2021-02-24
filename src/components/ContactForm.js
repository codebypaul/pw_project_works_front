import {Form, Button} from 'react-bootstrap'

export default function ContactForm() {
    return (
        <>
        <Form className='p-5'>
            <Form.Group>
                <Form.Control type='text' placeholder='Name'/>
            </Form.Group>
            <Form.Group>
                <Form.Control type='email' placeholder='Email'/>
            </Form.Group>
            <Form.Group>
                <Form.Control type='text' placeholder='Phone Number'/>
            </Form.Group>
            <Form.Group>
                <Form.Control as='textarea' rows={5} placeholder='How can we help you grow?'/>
            </Form.Group>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
        </>
        
    )
}