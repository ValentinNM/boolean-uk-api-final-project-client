import "./App.css";
import AsideNavigation from "./Pages/AsideNavigation";
import AsideUserProfile from "./Pages/AsideUserProfile";
import Header from "./Pages/Header";
import { Switch, Route } from "react-router-dom";
import {useState, useEffect} from "react"
import Questions from "./components/Questions";
import AddQuestion from "./components/AddQuestion";

export default function App() {
  const [users, setUsers] = useState([]);
  const [questions, setQuestion] = useState([]);
  const [tags, setTags] = useState([])

  console.log("inside state: ", users, "\n", "questions state: ", questions);
  console.log("tags: ", tags)

  useEffect(() => {
    fetch(`http://localhost:3030/users`)
      .then((res) => res.json())
      .then((usersData) => {
        setUsers(usersData);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3030/questions`)
    .then((res)=> res.json())
    .then((data) => { 
      console.log("questions...", data);
      setQuestion(data);
    });
   }, []);

   useEffect(() => {
       fetch(`http://localhost:3030/tags`)
         .then((res) => res.json())
         .then((tagsData) => {
           setTags(tagsData);
         });
     }, []);


  return (
    <div className="App">
      <Header />
      <div className="main-columns-template">
        <AsideNavigation
        tags={tags}
        />
        <Switch>
          <Route exact path="/questions">
            <Questions
            questions={questions}
            />
          </Route>
          <Route exact path="/questions/add">
            <AddQuestion 
            tags={tags}
            setQuestion={setQuestion}
            questions={questions}
            />
          </Route>
        </Switch>
        <AsideUserProfile 
        users={users}
        />
      </div>
    </div>
  );
}
