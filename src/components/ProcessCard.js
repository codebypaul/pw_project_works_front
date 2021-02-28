import { propTypes } from "react-bootstrap/esm/Image";

export default function ProcessCard(props){
    return(
        <div className="card">
            <h1 className='card-title'>
                {props.title}
            </h1>
            <p className="card-text">{props.text}</p>
        </div>
    )
}