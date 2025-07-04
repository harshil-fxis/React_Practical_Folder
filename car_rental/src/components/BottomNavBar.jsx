import { NavLink, useNavigate } from "react-router-dom"
import './BottomNavBar.css';
import { RiHome5Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { useEffect } from "react";

const BottomNavBar = () => {
    return(
        <div className="bottom-nav">
            <NavLink to="/bottom/home" className="nav-item"><RiHome5Line/></NavLink>
            <NavLink to="/bottom/profile" className="nav-item"><IoPersonOutline/></NavLink>
        </div>
    )
}

export default BottomNavBar