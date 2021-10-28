import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AsideNavigation() { 


    const [tags, setTags] = useState([])

    console.log("tags: ", tags)

    useEffect(() => {
        fetch(`http://localhost:3030/tags`)
          .then((res) => res.json())
          .then((tagsData) => {
            setTags(tagsData);
          });
      }, []);

return(
    <aside className = "main-dashboard-section aside">

        <nav className="main-dash-nav">

            <Link to="/home"> Home </Link>

            <Link to="/questions"> Questions </Link>

        <section className="main-tags-section">
            <div className="two-row-grid">
            <Link to="/tags"> Tags </Link>
            <ul>
                {tags.map((tag)=> { 
                    return(
                        <div>
                        <input type="checkbox"  />
                        <li className="tag">{tag.name}</li>
                        </div>
                    )
                })
                }
            </ul>
            </div>
            <button className="clear-button"> Clear all </button>
        </section>

        </nav>

    </aside>
    )
}

