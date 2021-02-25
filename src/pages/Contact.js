import ContactForm from '../components/ContactForm'
// import styled from 'styled-components'


export default function Contact() {
    return (
        <>
            <div className="container-fluid p-5 mt-5">
                <h1 className="text-center">Contact Us</h1>
                <div className="container-fluid my-5">
                    <h6>Give us a call</h6>
                    <p>Phone : <a href="tel:7042311262‬">(704) 231-1262‬</a></p>
                    <h6>Email us directly</h6>
                    <p>Email : <a href="mailto:paul.d.williams.si@gmail.com">paul.d.williams.si@gmail.com‬</a></p>
                </div>
            </div>
            <h3 className='text-center'>Ready to get started?</h3>
            <h4 className='text-center'>Fill out the form and one of our team members will reach out.</h4>
            <ContactForm/>
        </>
    )
}