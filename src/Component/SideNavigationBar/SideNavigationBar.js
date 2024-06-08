import React, {useState} from 'react'
import "./SideNavigationBar.css"
import { NavLink } from 'react-router-dom';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ContactsIcon from '@mui/icons-material/Contacts';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const SideNavigationBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div 
      className={`sidebar ${isExpanded ? 'expanded' : ''}`} 
      onMouseEnter={() => setIsExpanded(true)} 
      onMouseLeave={() => setIsExpanded(false)}
    >
        <div className='admin_header'>
            <SupervisorAccountIcon/>
            <span className="sidebar-text">ADMIN</span>
        </div>
        <div className='img_container'>
            <div>
                <Avatar/>
            </div>
            <div>Pankaj</div>
            <div>UI Developer</div>
        </div>
      <ul className="sidebar-list">
      <li className="sidebar-item">
            <NavLink exact to={"/dashboard"} className="sidebar-link">
            <span><DashboardIcon/></span>
            <span className="sidebar-text">DashBoard</span>
            </NavLink>
            </li>
            <li className="sidebar-item">
            <NavLink to={"/manageTeam"} className="sidebar-link">
            <span><Diversity1Icon/></span>
            <span className="sidebar-text">Manage team</span>
            </NavLink>
            </li>
            <li className="sidebar-item">
            <NavLink to={"/contactInformation"} className="sidebar-link">
            <span><ContactsIcon/></span>
            <span className="sidebar-text">Contacts Information</span>
            </NavLink>
            </li>
            <li className="sidebar-item">
            <NavLink to={"/invoiceBalance"} className="sidebar-link">
            <span><FileCopyIcon/></span>
            <span className="sidebar-text">Invoice Balances</span>
            </NavLink>
            </li>
            <li className="sidebar-item">
            <NavLink to={"/barChart"} className="sidebar-link">
            <span><BarChartIcon/></span>
            <span className="sidebar-text">Bar Chart</span>
            </NavLink>
            </li>
            <li className="sidebar-item">
            <NavLink to={"/pieChart"} className="sidebar-link">
            <span><PieChartIcon/></span>
            <span className="sidebar-text">Pie Chart</span>
            </NavLink>
            </li>
            <li className="sidebar-item">
            <NavLink to={"/lineChart"} className="sidebar-link">
            <span><StackedLineChartIcon/></span>
            <span className="sidebar-text">Line Chart</span>
            </NavLink>
            </li>
      </ul>
    </div>
  )
}

export default SideNavigationBar