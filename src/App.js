import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import UsersList from "./components/Users";
import "./App.css";
// import React from "react";

function App() {
  const [users, setUsers] = useState([]);

  console.log("inside state: ", users);

  useEffect(() => {
    fetch(`http://localhost:3030/users`)
      .then((res) => res.json())
      .then((usersData) => {
        setUsers(usersData);
        console.log(usersData);
      });
  }, []);

  return <div className="App"></div>;
  <>
    <UsersList />
    <Switch>
      <Route></Route>
    </Switch>
  </>;
}

export default App;
