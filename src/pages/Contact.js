import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <>
            <h1 className="text-center">Contact Us</h1>
            <div className="container-fluid">
                <p>Phone : <a href="tel:7042311262‬">(704) 231-1262‬</a></p>
                <p>Email : <a href="mailto:paul.d.williams.si@gmail.com">paul.d.williams.si@gmail.com‬</a></p>
            </div>
            <ContactForm/>
        </>
    )
}