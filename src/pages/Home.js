import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Home() {
    return (
        <>
            <div className="container-fluid">
                
            </div>
            <div className="container-fluid">
            <Link to='/reviews'>
                <h1>Reviews</h1>
            </Link>
            </div>
            <SeenOn>
                Articles
            </SeenOn>
            <SeenOn>
                Seen On
            </SeenOn>
        </>
    )
}

const SeenOn = styled.div`
    border: 1px solid black;
    width: 100%;
    padding: 5rem;
`
