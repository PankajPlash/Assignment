import React, { useEffect, useState } from 'react'
// import "./ContactInformation.scss"
import "./InvoiceBalance.scss"
import { mockDataInvoices } from "../Data/Data"
const headerData = ["id", "name", "email", "cost", "phone", "date"]


const InvoiceBalance = () => {
    const [contactData, setContactData] = useState([])

    useEffect(() => {setContactData(mockDataInvoices)}, [])
    
  return (
    <>
    <div className={'invoice_container'}>
                <div className={'team_header'}>
                    <div className='team'>Invoices</div>
                    <div className='team_text'>List of contect for future rfrence.</div>
                </div>
                <div className={'table_invoice_container'} style={{marginTop:"10px"}}>
                    <table>
                        <thead>
                            <tr>
                                <th><input type='checkbox' /></th>
                                {
                                    headerData.map((item) => (
                                        <>
                                            <th key={item}>{item}</th>
                                        </>
                                    ))
                                }
                            </tr>

                        </thead>
                        <tbody>
                            {
                                contactData.map((team) => {
                                    return (
                                        <tr>
                                            <td><input type='checkbox' /></td>
                                            <td>{team.id}</td>
                                            <td>{team.name}</td>
                                            <td>{team.email}</td>
                                            <td>{team.cost}</td>
                                            <td>{team.phone}</td>
                                            <td>{team.date}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    </>
  )
}

export default InvoiceBalance