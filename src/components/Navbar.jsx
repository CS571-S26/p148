import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const getLinkClassName = ({ isActive }) => isActive ? "nav-link active-link" : "nav-link";

    return (
        <nav className="site-nav" aria-label="Main navigation">
            <div className="site-nav__inner">
                <NavLink to="/" className="site-logo">Fitness Monger</NavLink>
                <div className="site-nav__links">
                    <NavLink to="/" className={getLinkClassName}>Home</NavLink>
                    <NavLink to="/plans" className={getLinkClassName}>Plans</NavLink>
                    <NavLink to="/classes" className={getLinkClassName}>Classes</NavLink>
                    <NavLink to="/trainers" className={getLinkClassName}>Trainers</NavLink>
                    <NavLink to="/checkout" className={getLinkClassName}>Checkout</NavLink>
                </div>
            </div>
        </nav>
    );
}
