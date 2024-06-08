import React from 'react'
import "./ProgressBar.scss"

const ProgressBar = ({progress}) => {
  return (
    <>
        <div className='progress_bar_cont'>
            <div className='main_bar'>
                <div className='bar' style={{ '--progress': progress }}></div>
            </div>
        </div>
    </>
  )
}

export default ProgressBar