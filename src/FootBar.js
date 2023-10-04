import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './FootBar.css'; 

export default function FootBar() {
    return (
        
            <footer className="footbar">
                <div className="footBar-Inner">
                    <ul className="footBar-nav">
                    <li className="footBar-Item">
                            <CustomLink to="/Account"> Account </CustomLink>
                        </li>
                        <li className="footBar-Item">
                            <CustomLink to="/Signin"> Sign In </CustomLink>
                        </li>
                    
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
