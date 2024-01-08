import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './FootBar.css'; 

export default function FootBar() {
    return (
            <footer className="footbar">
                <div className="footBar-Inner">
                    <ul className="footBar-nav">
                        <div className="botLeft">
                    <li className="footBar-Item">
                            <CustomLink to="/Account"> me </CustomLink>
                        </li>
                        </div>
                        <div className="botRight">
                        <li className="footBar-Item">
                            <CustomLink to="/Signin"> sign in </CustomLink>
                        </li>
                        </div>
                    </ul>
                </div>
            </footer>
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
