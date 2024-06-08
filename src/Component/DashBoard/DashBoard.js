import React, { useEffect, useState } from 'react'
import "./DashBoard.scss"
import CardComponent from "../CardComponent/CardComponent"
import MailIcon from '@mui/icons-material/Mail';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import TrafficIcon from '@mui/icons-material/Traffic';
import BarChart from "../BarChart/BarChart"
import PieChart from "../PieChart/PieChart"
import LineChart from "../LineChart/LineChart"
import TransactionDetails from "../TransactionDetails/TransactionDetails"
import { mockTransactions } from "../Data/Data"

const DashBoard = () => {
  const [transdata, setTransData] = useState([])
  console.log('transdata: ', transdata);
  useEffect(() => {
    setTransData(mockTransactions)
  }, [])
  return (
    <>
      <div className='dashBoard_container'>
        <div className='dashBoard_text_con'>
          <div className='dashboard_text'>DASHBOARD</div>
          <div className='welcome_text'>Welcome to your dashboard</div>
        </div>
        <div className='dashBoardData_container'>
          <div className='card_item'>
            <CardComponent icon={<MailIcon />} totalCount={"12,361"} text={"Email"} />
          </div>
          <div className='card_item'>
            <CardComponent icon={<PointOfSaleIcon />} totalCount={"431,225"} text={"Sales Obtained"} />
          </div>
          <div className='card_item'>
            <CardComponent icon={<PermContactCalendarIcon />} totalCount={"32,441"} text={"New Clients"} />
          </div>
          <div className='card_item'>
            <CardComponent icon={<TrafficIcon />} totalCount={"132,5431"} text={"Traffic Received"} />

          </div>
        </div>
        <div className='revenui-gen'>
          <div className='lineChart'>
            <div style={{marginLeft:"20px"}}>Revenue Generated</div>
            <LineChart />
          </div>
         
            <div className='transaction_container' style={{overflowY:"auto"}}> 
              <div className='recent_transaction'>Recent Transaction</div>
              {
                transdata.map((data) => {
                  return <TransactionDetails textId={data.txId} user={data.user} date={data.date} cost={data.cost} />
                })
              }
            </div>
        </div>
        <div className='revenui-gen-data'>
          <div >
            <div style={{marginLeft:"20px", color:"white"}}>Sales Quality</div>
            <BarChart />
          </div>
          <div>
            <PieChart />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard