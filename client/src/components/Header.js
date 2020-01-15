import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header>
                <h1>the partogram</h1>
                <nav className="navigation">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/partograph">Partogram</NavLink>
                    <NavLink to="/user">Users</NavLink>
                    <NavLink to="#">Log In</NavLink>
                    <NavLink to="#">Register</NavLink>
                    <NavLink to="#">Patients</NavLink>
                </nav>
            </header>
        </div>
    )
}






