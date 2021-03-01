import { Link } from 'react-router-dom'
import styled from 'styled-components'
// components
import Banner from '../components/Banner'
import SignUpNewsLetter from '../components/SignUpNewsLetter'
import ContactForm from '../components/ContactForm'
import BlogPost from '../components/BlogPost'
import SkyLine from '../images/CLT-skyline.gif'

export default function Home() {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    return (
        <>
            <Banner/>
            <IntroContainer>
                <img src={SkyLine} alt="" width='100%'/>
            </IntroContainer>
            <div className="container-fluid">
                <p>Grow</p>
                <p>Brand</p>
                <p>Market</p>
                <p>Build</p>
            </div>
            <div className="container-fluid">

            </div>
            <ArticlesArea>
                <h1 className='text-center'>Featured Articles</h1>
                <BlogPost title='First Blog Post' body={lorem}/>
                <BlogPost title='First Blog Post' body={lorem}/>
            </ArticlesArea>
            <SeenOn className='text-center'>
                <h1>We have helped these companies start and grow</h1>
                <div className="row m-0 company">
                    <div className="company-card card mx-auto">
                        <h1>NoirJam</h1>
                    </div>
                </div>
                <ul>
                    <li>
                        NoirJam
                    </li>
                    <li>
                        Seven Deadly Sins API
                    </li>
                    <li>
                        Joyous Beauty
                    </li>
                    <li>
                        The Broken Fox
                    </li>
                    <li>
                        Williamsburg Woofs
                    </li>
                </ul>
            </SeenOn>
            <SignUpNewsLetter/>
            <ContactWrapper className='container-fluid text-center'>
                <p className='p-5 m-5'>We are committed to growth, no matter what your business, we are here to help you achieve your goals</p>
                <h1>Contact Us Today</h1>
                <ContactForm/>
            </ContactWrapper>
        </>
    )
}
const IntroContainer = styled.div`
    height: calc(100vh - 8rem);
    background: grey;
`
const SeenOn = styled.div`
    width: 100%;
    padding: 5rem;
    .company {
        transition: .5s linear;
        background: blue;
        position: relative;
        padding: 4rem 0;
    }
    .company-card {
        width: 20rem;
        height: 20rem;
        transition: .7s;
    }
    .card-text-area {
        transition: .7s linear;
        
    }
    .company:hover{
        padding: 5rem 0 10rem 0;
        .company-card{
            transform: rotate(45deg);
        }
        .card-text-area {
            transform: rotate(-45deg);
            position: absolute;
            left: 5%;
            top: 0;
        }
    }
    
`
const ArticlesArea = styled.div`
    width: 100%;
    padding: 5rem;
`
const ContactWrapper = styled.div`
    background: rgba(15,50,200);
    color: white; 
`