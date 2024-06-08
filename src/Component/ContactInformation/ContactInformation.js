import React, { useEffect, useState } from 'react'
import "./ContactInformation.scss"
import { mockDataContacts } from "../Data/Data"
const headerData = ["id", "name", "phone", "age", "email", "address", "city", "registrarId", "zipCode"]

const ContactInformation = () => {
    const [contactData, setContactData] = useState([])

    useEffect(() => {
        setContactData(mockDataContacts)
    }, [])
    return (
        <>
            <div className={'contact_container'}>
                <div className={'team_header'}>
                    <div className='team'> Contacts</div>
                    <div className='team_text'>List of contect for future rfrence.</div>
                </div>
                <div className={'table_contact_container'} style={{marginTop:"10px"}}>
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
                                            <td>{team.phone}</td>
                                            <td>{team.age}</td>
                                            <td>{team.email}</td>
                                            <td>{team.address}</td>
                                            <td>{team.city}</td>
                                            <td>{team.registrarId}</td>
                                            <td>{team.zipCode}</td>

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

export default ContactInformation