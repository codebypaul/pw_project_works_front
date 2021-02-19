import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="row m-0">
                <div className="col-md-4">
                    <h1>Help</h1>
                    <ul>
                        <li>
                        <Link to='/FAQ'>FAQ</Link></li>
                        <li>
                            <Link to='/contact'>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h1>About</h1>
                    <ul>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/projects'>What we've made before</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h1>Legal</h1>
                    <ul>
                        <li>
                            <Link to='/privacy_policy'>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to='terms_of_service'>
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container text-center">
                <span>©2021 PW Project Works</span>
                <div>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </div>
        </FooterWrapper>
    )
} 

const FooterWrapper = styled.footer`
    background: black;
    color: white;
`