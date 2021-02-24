import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function Banner() {
    return (
        <BannerWrapper>
        Time to Stand out <Link to='/contact'><button className='btn btn-primary'>Get started</button></Link>
        </BannerWrapper>
    )
}

const BannerWrapper = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`