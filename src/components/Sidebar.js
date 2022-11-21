import React from 'react'
import '../style/SideBar.css'
import { FaUserCircle } from 'react-icons/fa';
import { GrFormNextLink } from 'react-icons/gr';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='invoice'>
                <div className="text">
                    Create New  <br /> Invoice
                </div>
                <div className="SidebarButton">
                    <button className="SidebarButtonTxt">Get Started</button>
                </div>
            </div>
            <div>
                <hr />
            </div>

            <div className="clientDtl">
                <h5 className='date'>Jan'20</h5>
                <p >client of the Month</p>
                <div className='clientDetails'>
                    <p className='user'><FaUserCircle /></p>
                    <div>
                        <p>Margje Jutten ⭐</p>
                        <p><span>$1464.00</span> 63%</p>
                    </div>
                </div>
                <hr />
            </div>

            <div className='bottom'>
                <h5 className='date'>dec'19 - Jan'20</h5>
                <p> Earning graph <span><GrFormNextLink /></span></p>

            </div>
        </div >
    )
}

export default Sidebar