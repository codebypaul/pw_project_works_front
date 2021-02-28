import styled from 'styled-components'
import {Carousel} from 'react-bootstrap'
// components
import Review from '../components/Review'
import fma from '../images/fma logo.png'

export default function Services() {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    return (
        <>
        <div className="container">
            <ServiceContainer>
                <h2 id="Landing_pages">Landing Pages</h2>
                <p>A landing page is a great first step to get your business internet presence.</p>
                <p>{lorem}</p>
                <hr/>
            </ServiceContainer>
            <ServiceContainer>
                <h2 id="Mobile_Application">Mobile Application</h2>
                <p>Do you already have a working system, but you want to reduce cost and make it easier for your teammates to use. Let us develop an application, launched on the app and google play stores for your team to have and use.</p>
                <ul>
                  <li>
                    Clock in
                  </li>
                  <li>
                    Communicate important messages
                  </li>
                  <li>
                    Alert your team to new changes
                  </li>
                  <li>
                    Talk directly to members on record
                  </li>
                </ul>
                <hr/>
            </ServiceContainer>
            <ServiceContainer>
                <h2 id="SEO_Strategies">SEO Strategies</h2>
                <p>An SEO strategy (also referred to as “SEO approach” or “search engine optimization strategy”) is the process of planning, outlining and implementing steps designed to improve search engine rankings. In other words: an SEO strategy is the process that you follow when you want to get more organic traffic</p>
                <hr/>
            </ServiceContainer>
            <ServiceContainer>
                <h2 id="Social_Media_Automation">Social Media Automation</h2>
                <p>{lorem}</p>
                <hr/>
            </ServiceContainer>
            <ServiceContainer>
                <h2 id="Web Applications">
                    Web Applications
                </h2>
                <p></p>
                <hr/>
            </ServiceContainer>
            



        </div>
        <ReviewContainer>
            <h2 className='text-center'>Reviews</h2>
            <div className="container">
                <Review name='Person 1' rating={5} body={lorem}/>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        </ReviewContainer>
        </>
    )
}

const ServiceContainer = styled.div`
    margin: 3rem 0;
`
const ReviewContainer = styled.div`
    width: 100%;
    padding: 5rem;
    background: rgba(200,200,200,1);
`