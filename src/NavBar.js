import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css'; 

export default function NavBar() {
    return (
        
            <nav className="navbar">
                <div className="navBar-Inner">
                    <ul className="navBar-nav">
                        <div className="topLeft">
                    <li className="navBar-Item">
                        <CustomLink to="/SearchPark"> search </CustomLink>
                        </li>
                        </div>
                        <div className="centerDot">
                    <li className="navBar-Item">
                        <CustomLink to="/"> . </CustomLink>
                        </li>
                        </div>
                        
                        <div className="topRight">
                        <li className="navBar-Item">
                        <CustomLink to="/About"> about </CustomLink>
                        </li>
                        </div>
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
