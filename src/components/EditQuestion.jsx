
export default function EditQuestion() { 

    return(
        <section className="question-to-edit">
            <form action=" ">
                <label htmlFor="">
                    <h3>Title</h3>
                </label>
                <input type="text" />
                <label htmlFor="">
                    <h3>Body</h3>
                </label>
                <input type="text" />
                <label htmlFor="">
                    <h3>Tags</h3>
                </label>
                <input type="text" />
                <label htmlFor="">
                    <h3>{}</h3>
                    <h4>User to get through props</h4>
                </label>
                <button type="submit"> 
                    Submit
                </button>
            </form>
        </section>

    )
}