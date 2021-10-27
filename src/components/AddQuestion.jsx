
export default function AddQuestion() { 

    return(
        <section className="question-to-add">
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
                    <h3>User</h3>
                    <h4>User to be incerted</h4>
                </label>
                <button type="submit"> 
                    Post
                </button>
            </form>
        </section>

    )
}