import { useState, useEffect } from "react";

export default function EditQuestion(props) { 

    const { questions, 
            setQuestion, 
            questionToUpdate
        } = props;

        const {title, body, tags, date } = questionToUpdate
        console.log("props in EditQuestion: ", questionToUpdate)

        const [toUpdateQuestion, setToUpdateQuestion] = useState({ 
            title: "",
            body: "",
            userId: null, 
            tags: []
        })

        useEffect(() => {
            if(questionToUpdate) {
            const { id, title, body, tags } = questionToUpdate

            setToUpdateQuestion({...questionToUpdate})

        }}, [questionToUpdate])

    const handleSubmit = (event) => { 

        event.preventDefault();

        const updatedQuestion = "string " //{title, body, tags}
        
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
            
            setQuestion([...questions, questionToPatch])
        })
    }

        const handleTitleInput = (event) => { 
            console.log("handleTitleInput: ",event.target.value)
            setToUpdateQuestion(event.target.value)
        }

        const handleBodyInput = (event) => { 
            console.log("handleBodyInput", event.target.value)
            setToUpdateQuestion(event.target.value)
        }

        // handleTagsInput = (event) => { 
        //     console.log(event.target.checked)
        // }

        // handleTagsInput = (event) => { 
        //     console.log(event.target.checked)
        // }

        
        return(
            <section className="question-to-edit centering-section">
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
                    <br />
                         <ul>
                         {/* {tags.map((tag, index)=> { 
                             
                             return( */}
                                 {/* <div key={index}> */}
                                 <div>
                                 <input type="checkbox"  />
                                 <li className="tag"></li>
                                 </div>
                        {/*       )
                          })
                          } */}
                     </ul>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>

    )
}