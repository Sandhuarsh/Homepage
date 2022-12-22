import React from 'react'
import img1 from './img1.png'

const Navbar = () => {
    return (
        <div>
            <section className="header">
                <nav className='Navbar'>
                    <div className="logo">
                        <a href="index.html"><img src={img1} alt="" /></a>
                    </div>
                    <div className="nav-links" id="navLinks">
                        <i className="fa fa-times"></i>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Discussion</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
                    <i className="fa fa-bars"></i>
                </nav>
            </section>
        </div>
    )
}

export default Navbar
