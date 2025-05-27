import './index.css'

import {FaChevronDown} from 'react-icons/fa'
import Anatomy from '../AnatomySection'
import Health from '../HealthStatusCard'
import healthStatusCards from '../../data/healthIndicators'

import Activity from '../activity'

const DashboardOverview = () => (
  <div className="dashboard-wrapper">
    <div className="dashboard-header">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-week">
        <p>This week</p>
        <FaChevronDown size={14} color="#6b7280" />
      </div>
    </div>

    <div className="dashboard-content">
      <Anatomy />
      <ul className="health-status-list">
        {healthStatusCards.map(each => (
          <Health list={each} key={each.id} />
        ))}
      </ul>
    </div>

    <Activity />
  </div>
)

export default DashboardOverview
