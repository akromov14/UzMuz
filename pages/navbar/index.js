import React, { useState } from 'react'
import Clock from './clock';
import style from "./navbar.module.css"


const Navbar = () => {

    return (
            <div className={style.navbar}>
                <img src="uzmuzLogo.png" alt="uzmuz logo uzbekistan music tashkent" width="150px" />
                <button className="btn btn-primary ms-3"><a className='text-light' href="https://www.google.com/">Chiqish</a></button>
            </div>
    )
}

export default Navbar;




