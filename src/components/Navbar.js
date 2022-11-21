import React from 'react'
import '../style/Navbar.css'
import { SlNotebook } from 'react-icons/sl';
import { TbFileInvoice } from 'react-icons/tb';
import { BsFillPersonFill } from 'react-icons/bs';
import { FcSettings } from 'react-icons/fc';
import { FaBell } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
const Navbar = () => {
    return (
        <>
            <div className='Navbar'>
                <div className='NavBook'>
                    <h3><span><SlNotebook /></span> I-Flow</h3>
                </div>
                <div className="navItem">
                    <p className='dashboard'><span><HiOutlineDesktopComputer /> </span> Dashboard </p>
                    <p><span><TbFileInvoice /></span> Invoice  </p>
                    <p><span><BsFillPersonFill /></span> Clients</p>
                    <p><span><FcSettings /></span> Settings</p>
                </div>
                <div className="alert">
                    <p><FaBell /></p>
                    <p className='user'><FaUserCircle /></p>
                </div>
            </div>
        </>
    )
}

export default Navbar