
import { Link } from "react-router-dom";

export default function AsideNavigation(props) { 

const {tags} = props;

return(
    <aside className = "main-dashboard-section aside">

        <nav className="main-dash-nav">
        <div>
            <Link to="/questions"> Questions </Link>
        </div>
            <br />
        <section className="main-tags-section">
            <ul>
                <h3>Tags</h3>
                <br/>
                {tags.map((tag, index)=> { 
                    return(
                        <div key={index}  className="tag-element">
                        <input type="checkbox"  />
                        <li  className="tag">{tag.name}</li>
                        </div>
                    )
                })
                }
            </ul>
            <button className="clear-button"> Clear all </button>
        </section>

        </nav>

    </aside>
    )
}

