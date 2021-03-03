import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
// components
import Banner from '../components/Banner'
import SignUpNewsLetter from '../components/SignUpNewsLetter'
import ContactForm from '../components/ContactForm'
import BlogPost from '../components/BlogPost'
import HomeAnimation from '../components/HomeAnimation'
import {PageWrapper} from '../components/designComps'
import MarketingCont from '../components/MarketingCont'

export default function Home() {
    const [articles, setArticles] = useState(false)
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    const enterScreen = (e) => {
        if (window.scrollY > 1000){
            setArticles(true)
        } else {
            setArticles(false)
        }
        // }
    }

    window.addEventListener('scroll',enterScreen)

    return (
        <PageWrapper>
            {/* <Banner/> */}
            <HomeAnimation/>
            <IntroContainer/>
            <MarketingCont/>
            <ArticlesArea className={articles ? 'articles active' : 'articles'}>
                <h1 className='text-center' onScroll={enterScreen}>Featured Articles</h1>
                <BlogPost title='First Blog Post' body={lorem}/>
                <BlogPost title='First Blog Post' body={lorem}/>
                <BlogPost title='First Blog Post' body={lorem} onScroll={enterScreen}/>
            </ArticlesArea>
            <SeenOn className='text-center'>
                <h1>We helped these companies start and grow</h1>
                <div className="row m-0 company">
                    <div className="company-card card mx-auto">
                        <h1>NoirJam</h1>
                    </div>
                </div>
                <div className="row m-0 company">
                    <div className="company-card card mx-auto">
                        <h1>Seven Deadly Sins API</h1>
                    </div>
                </div>
                <div className="row m-0 company">
                    <div className="company-card card mx-auto">
                        <h1>Joyous Beauty</h1>
                    </div>
                </div>
                <div className="row m-0 company">
                    <div className="company-card card mx-auto">
                        <h1>The Broken Fox</h1>
                    </div>
                </div>
                <div className="row m-0 company">
                    <div className="company-card card mx-auto">
                        <h1>Williamburg Woofs</h1>
                    </div>
                </div>
            </SeenOn>
            <SignUpNewsLetter/>
            <ContactWrapper className='container-fluid text-center'>
                <p className='p-5 mb-5 mx-5'>We are committed to growth, no matter what your business, we are here to help you achieve your goals</p>
                <h1>Contact Us Today</h1>
                <ContactForm/>
            </ContactWrapper>
        </PageWrapper>
    )
}
const IntroContainer = styled.div`
    height: calc(100vh - 8rem);
    background: transparent;
`


const SeenOn = styled.div`
    width: 100%;
    padding: 5rem 0 0 0;
    background: white;
    .company {
        transition: .5s linear;
        position: relative;
        padding: 4rem 0;
    }
    .company-card {
        width: 20rem;
        height: 20rem;
        transition: .7s;
        box-shadow: 0 0 5px 2px rgba(150,150,150,.7);
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
    background: linear-gradient(45deg, var(--mainBlue),var(--lightBlue));
    color: white; 
`