import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>

            <div className="container-fluid">
            <Link to='/reviews'>
                <h1>Reviews</h1>
            </Link>
                {/* <div className="card">
                    
                </div> */}
            </div>
        </div>
    )
}