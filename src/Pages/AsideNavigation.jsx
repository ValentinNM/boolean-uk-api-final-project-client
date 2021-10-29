// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AsideNavigation(props) { 

const {tags} = props;

return(
    <aside className = "main-dashboard-section aside">

        <nav className="main-dash-nav">
        <div>
            <Link to="/questions"> Questions </Link>
        </div>
            <h3>Tags</h3>
        <section className="main-tags-section">
            {/* <Link to="/tags"> Tags </Link> */}
            <ul>
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

