
export default function AddQuestion() { 

    return(
        <section className="question-to-add centering-section">
            <form className="question-form" action=" ">
                <label htmlFor="">
                    <h3>Title</h3>
                </label>
                <input type="text" />
                <label htmlFor="">
                    <h3>Body</h3>
                </label>
                {/* <input type="text" />
                 */}
                 <textarea name="" id="" cols="30" rows="10"></textarea>
                <div>
                    <label htmlFor="">
                        <h3>Tags</h3>
                    </label>
                    {/* <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" /> */}
                </div>
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