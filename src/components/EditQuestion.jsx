import { useState, useEffect } from "react";

export default function EditQuestion(props) { 

    const { questions, 
            setQuestion, 
            questionToUpdate
        } = props;

        // const {title, body, tags, date } = questionToUpdate; 

        console.log("props in EditQuestion: ", questionToUpdate)

        const [toUpdateQuestion, setToUpdateQuestion] = useState({ 
            title: "",
            body: "",
            userId: null, 
            tags: [] // or {}
        })

        useEffect(() => {
            if(questionToUpdate) {
            const { id, title, body, tags } = questionToUpdate

            setToUpdateQuestion({...questionToUpdate})

        }}, [questionToUpdate])

    const handleSubmit = (event) => { 

        event.preventDefault();

        const updatedQuestion = {title, body, tags}
        
        const fetchOptions = { 
            method : "PATCH",
            headers : { 
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updatedQuestion)
        };
        
        fetch(`http://localhost:3030/questions/user/${questionToUpdate.id}`, fetchOptions)
        .then((res) => res.json())
        .then((newUpdatedQuestion) => {
            console.log("just newUpdatedQuestion: ", newUpdatedQuestion)
            
            const questionToPatch = { 
                ...newUpdatedQuestion
            }
            
            setQuestion([...questions, newUpdatedQuestion])
        })
    }

        const handleTitleInput = (event) => { 
            console.log(event.target.value)
            // setToUpdateQuestion(event.target.value)
        }

        const handleBodyInput = (event) => { 
            console.log(event.target.value)
            // setToUpdateQuestion(event.target.value)
        }

        // handleTitleInput = (event) => { 
        //     console.log(event.target.value)
        // }

        
        return(
            <section className="question-to-edit">
             <form className="question-form" name="editQuestion" onSubmit={handleSubmit}>
                <div className="input-title">
                <label htmlFor="">
                    <h3>Title</h3>
                </label>
                <input value={toUpdateQuestion.title} type="text" onChange={handleTitleInput} />
                </div>
                <label htmlFor="">
                    <h3>Body</h3>
                </label>
                 <textarea
                 value={toUpdateQuestion.body}
                 name="body"
                 id=""
                 cols="50"
                 rows="20"
                 onChange={handleBodyInput}>
                 </textarea>
                <div>
                    <label htmlFor="">
                        <h3>Tags</h3>
                    </label>
                    {
                         <ul>
                         {questionToUpdate.tags.map((tag, index)=> { 
                             return(
                                 <div key={index}>
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
                <button type="submit">Submit</button>
            </form>
        </section>

    )
}