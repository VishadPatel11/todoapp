import React from 'react'

const Navbar = () => {
    return (
        <nav href="" className="nav-wrapper red darken-3">
            <div className="container">
                <ul className="right">
                    <a className="brand-logo left">Fun Projects</a>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/todo">Todos</a></li>
                </ul>
            </div>
        </nav>
    )

}
export default Navbar