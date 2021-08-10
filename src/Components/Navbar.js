import React from 'react'
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                
            </div>
            <input type="text" placeholder="Search.."/>
            <button onClick="/">
                <AiOutlineSortAscending size="24px" color="black"/>
            </button>
            <button onClick="/">
                <AiOutlineSortDescending size="24px" color="black"/>
            </button>
        </div>
    )
}

export default Navbar
