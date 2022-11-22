import React from 'react'
import { BiUserCircle } from 'react-icons/bi';
export default function TableItem({ client }) {
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
            <hr /></>
    )
}
