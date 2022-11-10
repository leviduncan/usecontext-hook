import React from 'react'
import { Link } from 'react-router-dom'
import { FaArtstation } from "react-icons/fa";


function Navbar() {
    return (
        <div className="nav">
            <div><Link to="/"><FaArtstation className="logo" /></Link></div>
            <div>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/profile">Profile</Link>
                <Link className="link" to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar