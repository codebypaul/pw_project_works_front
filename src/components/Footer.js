import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterWrapper>
            <Link to='/about'>
                About
            </Link>
        </FooterWrapper>
    )
} 

const FooterWrapper = styled.footer`
    background: black;
`