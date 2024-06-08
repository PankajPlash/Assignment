
// import SideNavigationBar from "./Components/SideNavigationBar/SideNavigationBar"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import SideNavigationBar from "./Component/SideNavigationBar/SideNavigationBar"
import ManageTeam from "./Component/ManageTeam/ManageTeam"
import ContactInformation from "./Component/ContactInformation/ContactInformation"
import InvoiceBalance from "./Component/InvoiceBalance/InvoiceBalance"
import BarChart from "./Component/BarChart/BarChart"
import PieChart from "./Component/PieChart/PieChart"
import DashBoard from "./Component/DashBoard/DashBoard"
import LineChart from "./Component/LineChart/LineChart"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideNavigationBar/>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/manageTeam" element={<ManageTeam />} />
          <Route path="/contactInformation" element={<ContactInformation />} />
          <Route path="/invoiceBalance" element={<InvoiceBalance />} />
          <Route path="/barChart" element={<BarChart />} />
          <Route path="/pieChart" element={<PieChart />} />
          <Route path="/lineChart" element={<LineChart />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
