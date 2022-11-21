import React from 'react'
import "../style/Dashboard.css"
import ClientData from "../components/ClientData"
import { BsSearch } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { TbApps } from 'react-icons/tb';
import { BiLastPage } from 'react-icons/bi';
import { RiPagesLine } from 'react-icons/ri';
import { GrNotes } from 'react-icons/gr';
import { IoMdDownload } from 'react-icons/io';
import { MdOutlineDownloadForOffline } from 'react-icons/md';
import { BsFillPrinterFill } from 'react-icons/bs';
const Dashboard = () => {
    return (
        <>
            <div className='dashBoard'>
                <div>
                    <h1>Dashboard</h1>
                </div>
                <div className='inp'>
                    <span><BsSearch /></span>
                    <input name="search" title="Search Bar" placeholder="Search anything here" />

                </div>
            </div>
            <div className="services">
                <div className="service">
                    <div className='icons icons1'><TbApps />
                    </div>
                    <div>
                        <h4 className='date'> paid</h4>
                        <h2 >64</h2>
                    </div>
                </div>
                <div className="service">
                    <div className='icons icons2'><RiPagesLine />
                    </div>
                    <div>
                        <h4 className='date'> unpaid</h4>
                        <h2 >49</h2>
                    </div>
                </div>
                <div className="service">
                    <div className='icons icons3'><GrNotes />
                    </div>
                    <div>
                        <h4 className='date'>overdue</h4>
                        <h2 >32</h2>
                    </div>
                </div>
                <div className="service">
                    <div className='icons icons4'><IoMdDownload />
                    </div>
                    <div>
                        <h4 className='date'> draft</h4>
                        <h2 >16</h2>
                    </div>
                </div>
            </div>
            <div className="clientDashboard">
                <div className="head">
                    <div>
                        <h2>Recent Invoices</h2>
                    </div>

                    <div className='icon'><BsFillPrinterFill /> <MdOutlineDownloadForOffline /></div>
                </div>
                <div className='client' >
                    <table className="clientList">
                        <th>ClientName</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </table>
                    {ClientData.map((client) => {
                        return (
                            <>
                                <div className="clientList">
                                    <div>
                                        <span className="clientImg">
                                            <BiUserCircle />
                                        </span>
                                        <div className='Nid'>
                                            <div className='clientName'>
                                                {`${client.cName} `}
                                            </div>
                                            <div className='clientId'>
                                                {`${client.cId}`}
                                            </div>
                                        </div>
                                    </div>
                                    <div> {client.date}</div>
                                    <div>{client.amount}</div>
                                    <div ><button className={`status ${client.status}`}>{client.status}</button></div>
                                </div>
                                <hr />
                            </>
                        )
                    })}
                </div>
                <div className="page">
                    <p>showing 10 out of 20</p>
                    <p className='nxtPage'>See All <BiLastPage /></p>
                </div>
            </div>

        </>
    )
}

export default Dashboard 