import { Link } from "react-router-dom";

export default function Questions(props) {
  const { questions, setQuestion, setQuestionToUpdate } = props;



  
  return (
    <section className="all-questions">
      <ul>
        {questions.map((question, index) => {
          const { title, date, body, userId } = question;

          const handleQuestionToUpdate = (event) => { 
            setQuestionToUpdate(question)
          }

          const handleDeleteButton = (e) => {

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
              <button onClick={handleQuestionToUpdate}>
                <Link to="/questions/user/edit">Update</Link>
              </button>
              <br />
              <button onClick={handleDeleteButton}>Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
