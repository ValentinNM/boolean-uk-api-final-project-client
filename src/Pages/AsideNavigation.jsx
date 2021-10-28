import { Link } from "react-router-dom";

export default function AsideNavigation() { 


return(
    <aside className = "main-dashboard-section aside">

        <nav className="main-dash-nav">

            <Link to="/home"> Home </Link>

            <Link to="/questions"> Questions </Link>

        <section className="main-tags-section">
            <div className="two-row-grid">
            <Link to="/tags"> Tags </Link>
            <ul>
                <li className="tag">  </li>
            </ul>
            </div>
            <button> Clear all </button>
        </section>

        </nav>

    </aside>
    )
}

