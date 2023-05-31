import React,{useEffect,useState} from 'react'
import {Link, useLocation} from "react-router-dom"
import "../styles/Navbar.css"
import { FiAlignJustify } from "react-icons/fi";



function Navbar() {

    const [expandNavbar,setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]); // if the location change then run this(once)

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={()=>{setExpandNavbar((prev)=> !prev)}}><FiAlignJustify size='3rem' color='white'/></button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Experience">Experience</Link>
            </div>
        </div>
    )
}

export default Navbar

