import React from 'react'
import "./CardComponent.scss"
import MailIcon from '@mui/icons-material/Mail';
import ProgressBar from "./ProgressBar/ProgressBar"

const CardComponent = ({icon, totalCount, text}) => {
    return (
        <>
            <div className='card_container'>
                <div className='card_data_container'>
                    <div className='card_msg_container' style={{color:"white"}}>
                        <div className='email_cont'>
                            {icon}
                        </div>
                        <div className='total_count'>
                            {totalCount}
                        </div>
                        <div className='text_container'>
                           {text}
                        </div>
                    </div>
                    <div className='card_progress_container' style={{color:"white"}}>
                        <div className='progress_box' style={{paddingRight:"10px", paddingTop:"10px"}}>
                        <ProgressBar progress={80} />
                        </div>
                        <div className='progress_percentage_box'>14%</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardComponent