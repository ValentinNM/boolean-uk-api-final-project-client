

export default function Header() { 

    return (
        <header>
            <div className="logo">
                <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" alt="logo" />
            </div>
            <div className="main_header_searchbar">
                <input className="question-search" type="text" placeholder="Place in your question" />
            </div>
            <div className="user-avatar">
                
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png" alt="user-avatar" />
            </div>

        </header>

    )

}
