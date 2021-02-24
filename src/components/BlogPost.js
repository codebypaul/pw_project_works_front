export default function BlogPost(props) {
    return (
        <div className="mb-5">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <p>{props.date}</p>
            <hr/>
        </div>
    )
}