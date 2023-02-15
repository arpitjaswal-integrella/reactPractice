import { NavLink } from "react-router-dom"

export const NavBar = () => {
    const navLinkStyles = ({isActive}) => {
        return{
            fontWeight: isActive ? "bold":"normal",
            textdecoration: isActive? "none": "underline",
        }
    }

    return(
        <nav>
            <NavLink style={navLinkStyles} to="/">Home</NavLink>
            <NavLink style={navLinkStyles} to="/about">About</NavLink>
        </nav>
    )
}