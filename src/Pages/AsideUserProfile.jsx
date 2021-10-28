import { Link, useHistory } from "react-router-dom";

export default function AsideUserProfile(props) {
  const { users } = props;
  console.log("users inside AsideUserProfile: ", users)
  return (
    <aside className="user-profile-section aside">
      <ul>
      {users.map((user, index) => {
        const { userName } = user
        return(
               <li key={index}>
              <h3>{userName}</h3>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
