export default function Review(props) {
    return (
        <div className="card p-3">
            <img src="" alt=""/>
            <h3>{props.name}</h3>
            <h4>{props.rating} Stars</h4>
            <p>{props.body}</p>
        </div>
    )
}