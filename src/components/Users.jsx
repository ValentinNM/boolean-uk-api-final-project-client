import { useHistory } from "react-router-dom";
import "../index.css";

function UsersList(props) {
  const { users } = props;

  const history = useHistory();

  return (
    <ul>
      {users.map((user, index) => {
        return (
          <aside className="users-list">
            <li key={index}>
              <h4>{user.userName}</h4>
            </li>
          </aside>
        );
      })}
    </ul>
  );
}

export default UsersList;
