import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-center gap-6 p-6 bg-gray-100">
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
            <NavLink to="/plans" className={({ isActive }) => isActive ? "active-link" : ""}>Plans</NavLink>
            <NavLink to="/classes" className={({ isActive }) => isActive ? "active-link" : ""}>Classes</NavLink>
            <NavLink to="/trainers" className={({ isActive }) => isActive ? "active-link" : ""}>Trainers</NavLink>
            <NavLink to="/checkout" className={({ isActive }) => isActive ? "active-link" : ""}>Checkout</NavLink>
        </nav>
    );
}
