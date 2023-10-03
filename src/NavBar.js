
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css'; 

export default function NavBar() {
    return (
        
            <nav className="navbar">
                <div className="navBar-Inner">
                    <Link to="/" className="site-title">Piano</Link>
                    <ul className="navBar-nav">
                    <li className="navBar-Item">
                            <CustomLink to="/SearchPark"> Search </CustomLink>
                        </li>
                        <li className="navBar-Item">
                            <CustomLink to="/About"> About </CustomLink>
                        </li>
                        <li className="navBar-Item">
                            <CustomLink to="Account"> Account </CustomLink>
                        </li>
                        <li className="navBar-Item">
                            <CustomLink to="/Signin"> Sign In </CustomLink>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <Link to={to} className={isActive ? "active" : ""} {...props}>
            {children}
        </Link>
    );
}
