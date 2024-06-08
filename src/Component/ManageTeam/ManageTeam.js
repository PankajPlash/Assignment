import React, { useEffect, useState } from 'react'
import "./ManageTeam.scss"
import { mockDataTeam } from "../Data/Data"
const headerData = ["id", "name", "phone", "age", "email", "access"]


const ManageTeam = () => {
    const [teamData, setTeamData] = useState([])
    const [allCheckedId, setAllCheckedId] = useState([])
    const [selectAll, setSelectAll] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const totalDataPerPage = 8;
    const lastIndex = currentPage * totalDataPerPage;
    const firstIndex = lastIndex - totalDataPerPage;
    const currentData = teamData.slice(firstIndex, lastIndex);
    const numberOfPage = teamData.length / totalDataPerPage
    console.log('numberOfPage: ', numberOfPage);

    const handleHeadCheck = (e) => {
        if (e.target.checked) {
            let checkedId = teamData.map(item => item.id)
            setAllCheckedId(checkedId)
            setSelectAll(true)
        } else {
            setAllCheckedId([])
            setSelectAll(false)
        }
    }

    const handleBodyCheck = (id) => {
        let selectedCheck = [...allCheckedId];
        if (selectedCheck.includes(id)) {
            selectedCheck = selectedCheck.filter(item => item !== id)
        } else {
            selectedCheck.push(id)
        }
        setAllCheckedId(selectedCheck)
        setSelectAll(selectedCheck.length === teamData.length)
    }
    const handlePageChange = (data) => {
        setCurrentPage(data)
    }

    useEffect(() => {
        setTeamData(mockDataTeam)
    }, [])
    return (
        <>
            <div className={'manage_team_container'}>
                <div className={'team_header'}>
                    <div className='team'>Team</div>
                    <div className='team_text'>Managing the Team.</div>
                </div>
                <div className="table_mange_container mt-2" style={{ marginTop: "10px" }}>
                    <table>
                        <thead>
                            <tr>
                                <th><input type='checkbox' checked={selectAll} onChange={handleHeadCheck} /></th>
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
                                currentData.map((team) => {
                                    return (
                                        <tr>
                                            <td><input type='checkbox' checked={allCheckedId.includes(team.id)} onChange={() => handleBodyCheck(team.id)} /></td>
                                            <td>{team.id}</td>
                                            <td>{team.name}</td>
                                            <td>{team.phone}</td>
                                            <td>{team.age}</td>
                                            <td>{team.email}</td>
                                            <td>{team.access}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    <div className='table_footer'>
                        <div className="pagination-controls">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                Previous
                            </button>
                            {Array.from({ length: numberOfPage }, (_, index) => (
                                <button
                                    key={index + 1}
                                    className={currentPage === index + 1 ? 'active' : ''}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                disabled={currentPage === numberOfPage}
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ManageTeam