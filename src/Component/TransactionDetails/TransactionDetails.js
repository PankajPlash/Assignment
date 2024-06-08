import React from 'react'
import "./TransactionDetails.scss"

const TransactionDetails = ({textId,user, date, cost }) => {
  return (
        <>
            <div className='trans_container'>
                <div className='trans_data_container'>
                    <div className='txt_id_con'>
                        <div className='txd_id'>{textId}</div>
                        <div className='user'>{user}</div>
                    </div>
                    <div>{date}</div>
                    <div className='btn_cont'><button>{cost}</button></div>
                </div>
            </div>
        </>
  )
}

export default TransactionDetails