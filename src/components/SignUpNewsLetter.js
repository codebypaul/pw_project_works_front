import {Form, Button} from 'react-bootstrap'
import styled from 'styled-components'

export default function NewsLetterForm() {
    return (
        <NewsSign>
            <h1 className='p-5'>We want you to help build your business!</h1>
            <h3>Sign up for our news letter</h3>
            <Form>
                <Form.Control type='email' placeholder='businessOwner@email.com' className='mb-5'/>
                <Button variant='primary' type='submit'>Sign Up</Button>
            </Form>
        </NewsSign>
    )
}

const NewsSign = styled.div`
    width: 100%;
    background: rgba(255,255,255,.7);
    text-align: center;
    padding: 5rem;
    color: black;

`