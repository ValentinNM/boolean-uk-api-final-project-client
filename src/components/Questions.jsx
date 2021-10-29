// import { useState } from "react";

function Questions (props) { 

    const {questions} = props;
    console.log("inside Questions controller: ", questions)
    return (
        <section className="all-questions">
            <ul>
                { questions.map((question, index) => {
                    const {title, date, body} = question; 
                    // user id for the above                    
                    // console.log("question content: ", question)
                    return(
                        <li key={index} className="question-content">  
                            <h4>{title}</h4>
                            <p>{body}</p>
                            <p>{date}</p>
                        </li>
                    )
                })
                }
            </ul>
         </section>
    )
}

export default Questions;