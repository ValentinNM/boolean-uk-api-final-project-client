import { useState } from "react";
import { useEffect } from "react";

export default function AddQuestion(props) { 

    const {tags, questions, setQuestions} = props;

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');

    const handleSubmit = (event) =>{

        event.preventDefault();

        const newQuestion ={ 
            title,
            body,
            userId
        };

        const fetchOptions = { 
            method: "POST",
            headers : { 
                "content-type" : "application/json"
            },
            body : JSON.stringify(newQuestion)
        };

        fetch(`http://localhost:3030/questions`, fetchOptions)
        .then((res) => res.json())
        .then((addedQuestion) => {
            console.log("addedQuestion: ", addedQuestion);

            const questionToAdd = { 
                ...addedQuestion
            }

            setQuestions([ ...questions,questionToAdd])
        })
    }

        const handleTitle = (e) => { 
            console.log("handleTitle: ", e.target.value)
            setTitle(e.target.value)
        }


        const handleBody = (e) => { 
            console.log("handleBody: ", e.target.value)
            setBody(e.target.value)
        }

    return(
        <section className="question-to-add centering-section">
            <form className="question-form" name="addQuestion" onSubmit={handleSubmit}>
                <div className="input-title">
                <label htmlFor="">
                    <h3>Title</h3>
                </label>
                <input type="text" onChange={handleTitle} />
                </div>
                <label htmlFor="">
                    <h3>Body</h3>
                </label>
                {/* <input type="text" />
                 */}
                 <textarea name="body" id="" cols="50" rows="20" onChange={handleBody}></textarea>
                <div>
                    <label htmlFor="">
                        <h3>Tags</h3>
                    </label>
                    {
                         <ul>
                         {tags.map((tag)=> { 
                             return(
                                 <div>
                                 <input type="checkbox"  />
                                 <li className="tag">{tag.name}</li>
                                 </div>
                             )
                         })
                         }
                     </ul>
                    }
                </div>
                <label htmlFor="">
                    {/* <h3>User</h3>
                    <h4>User to be incerted</h4> */}
                </label>
                <button type="submit"> 
                    Post
                </button>
            </form>
        </section>

    )
}