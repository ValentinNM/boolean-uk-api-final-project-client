// import { userSetter } from "core-js/fn/symbol";
import { Link, useHistory } from "react-router-dom";

export default function AsideUserProfile(props) {
  const { users } = props;
  return (
    <ul className="user-profile-aside">
      {users.map((user, index) => {
        return (
          <aside>
            <li key={index}>
              <h3>{user.userName}</h3>
            </li>
          </aside>
        );
      })}
    </ul>
  );
}
