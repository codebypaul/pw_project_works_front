export default function ContactForm() {
    return (
        <form action="" className="m-5 p-5">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Phone</label>
                    <input type="tel" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Message</label>
                    <textarea className="form-control" rows="10"></textarea>
                </div>
            </form>
    )
}