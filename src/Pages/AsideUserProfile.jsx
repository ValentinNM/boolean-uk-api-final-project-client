import { Link, useHistory } from "react-router-dom";

export default function AsideUserProfile(props) {
  const { users } = props;
  return (
    <aside className="user-profile-section aside">
      <ul>
      {/* { users.map((user, index) => {
        return(
               <li key={index}>
              <h3>{user.userName}</h3>
            </li>
          );
        })} */}
      </ul>
    </aside>
  );
}
