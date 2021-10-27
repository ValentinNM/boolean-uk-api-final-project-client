// import { format } from 'path/posix';
import "./App.css";
import AsideNavigation from "./Pages/AsideNavigation";
import AsideUserProfile from "./Pages/AsideUserProfile";
import Header from "./Pages/Header";
import { Switch, Route } from "react-router-dom";
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

  return (
    <div className="App">
      <Header />
      <div className="main-columns-template">
        <AsideNavigation />
        <Switch>
          <Route exact path="/questions"></Route>
        </Switch>
        <AsideUserProfile />
      </div>
    </div>
  );
}

export default App;

// ==============
// ||    ||    ||
// ||    ||    |x|
