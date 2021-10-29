import "./App.css";
import AsideNavigation from "./Pages/AsideNavigation";
import AsideUserProfile from "./Pages/AsideUserProfile";
import Header from "./Pages/Header";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Questions from "./components/Questions";
import AddQuestion from "./components/AddQuestion";

export default function App() {
  const [users, setUsers] = useState([]);
  const [questions, setQuestion] = useState([]);

  console.log("inside state: ", users, "\n", "questions state: ", questions);

  useEffect(() => {
    fetch(`http://localhost:3030/users`)
      .then((res) => res.json())
      .then((usersData) => {
        setUsers(usersData);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3030/questions`)
      .then((res) => res.json())
      .then((data) => {
        console.log("questions...", data);
        setQuestion(data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main-columns-template">
        <AsideNavigation />
        <Switch>
          <Route exact path="/questions">
            <Questions questions={questions} setQuestion={setQuestion} />
          </Route>
          <Route>
            <AddQuestion />
          </Route>
        </Switch>
        <AsideUserProfile users={users} />
      </div>
    </div>
  );
}
