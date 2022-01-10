import {ReactComponent as GithubIcon} from '../../assets/img/github.svg'
import './Navbar.css'
const Navbar = () => {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/dehonpaulo">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/dehonpaulo</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar