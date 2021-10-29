// import { useState } from "react";

function Questions(props) {
  const { questions, setQuestion } = props;
  //   console.log("inside Questions controller: ", questions);
  return (
    <section className="all-questions">
      <ul>
        {questions.map((question, index) => {
          const { title, date, body, userId } = question;

          const handleDeleteButton = (e) => {
            // console.log("inside question by Id: ", question.id);

            const deleteButton = {
              method: "DELETE",
            };

            fetch(
              `http://localhost:3030/questions/${question.id}`,
              deleteButton
            )
              .then((res) => res.json())
              .then((deletedQuestion) => {
                console.log("deleted question: ", deletedQuestion);
                console.log("updated questions: ", question);
                // setQuestion(...questions);
              });
          };
          return (
            <li key={index} className="question-content">
              <h4>{title}</h4>
              <p>{body}</p>
              <p>{date}</p>
              <button onClick={handleDeleteButton}>delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Questions;
