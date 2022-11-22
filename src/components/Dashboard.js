import React from 'react'
import "../style/Dashboard.css"
import { BsSearch } from 'react-icons/bs';
import clientData from '../services/getClientData';
import { TbApps } from 'react-icons/tb';
import { GrLinkNext } from 'react-icons/gr';
import { RiPagesLine } from 'react-icons/ri';
import { GrNotes } from 'react-icons/gr';
import { IoMdDownload } from 'react-icons/io';
import { MdOutlineDownloadForOffline } from 'react-icons/md';
import { BsFillPrinterFill } from 'react-icons/bs';
import TableItem from './TableItem';
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
                        <h4 className='service-status'> paid</h4>
                        <h2 >64</h2>
                    </div>
                </div>
                <div className="service">
                    <div className='icons icons2'><RiPagesLine />
                    </div>
                    <div>
                        <h4 className='service-status'> unpaid</h4>
                        <h2 >49</h2>
                    </div>
                </div>
                <div className="service">
                    <div className='icons icons3'><GrNotes />
                    </div>
                    <div>
                        <h4 className='service-status'>overdue</h4>
                        <h2 >32</h2>
                    </div>
                </div>
                <div className="service">
                    <div className='icons icons4'><IoMdDownload />
                    </div>
                    <div>
                        <h4 className='service-status'> draft</h4>
                        <h2 >16</h2>
                    </div>
                </div>
            </div>
            <div className="clientDashboard">
                <div className="head">
                    <div>
                        <h2>Recent Invoices</h2>
                    </div>

                    <div className='icon'>
                        <div className='printer'>
                            <BsFillPrinterFill />
                        </div>
                        <div className='download'>
                            <MdOutlineDownloadForOffline />
                        </div>
                    </div>
                </div>
                <div className='client' >
                    <table className="clientList">
                        <th>ClientName</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </table>
                    {clientData.map((client) => {
                        return <TableItem client={client} />
                    })}
                </div>
                <div className="page">
                    <p>showing 10 out of 20</p>
                    <p className='nxtPage'>See All <span><GrLinkNext /></span></p>
                </div>
            </div>

        </>
    )
}

export default Dashboard 