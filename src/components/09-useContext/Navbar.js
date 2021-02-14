import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {

    return  <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand">useContext</Link>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <div className="navbar-nav">
                                <NavLink exact activeClassName="active" className="nav-item nav-link" to="./">Home</NavLink>
                                <NavLink exact activeClassName="active" className="nav-item nav-link" to="./login">Login</NavLink>
                                <NavLink exact activeClassName="active" className="nav-item nav-link" to="./about">About</NavLink>
                           </div>
                    </div>
                </nav>
            </div>
}