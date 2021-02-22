export default function BlogPost(props) {
    return (
        <div className="mb-5">
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <p>{props.date}</p>
            <hr/>
        </div>
    )
}