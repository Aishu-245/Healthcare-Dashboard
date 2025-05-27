import {
  FaTachometerAlt,
  FaHistory,
  FaCalendarAlt,
  FaTooth,
  FaChartBar,
  FaComments,
  FaCog,
  FaHeartbeat,
  FaClock,
} from 'react-icons/fa'

const navLinks = [
  {id: 1, label: 'Dashboard', icon: <FaTachometerAlt size={24} />},
  {id: 2, label: 'History', icon: <FaHistory size={24} />},
  {id: 3, label: 'Calendar', icon: <FaCalendarAlt size={24} />},
  {id: 4, label: 'Appointments', icon: <FaClock size={24} />},
  {id: 5, label: 'Statistics', icon: <FaChartBar size={24} />},
  {id: 6, label: 'Tests', icon: <FaTooth size={24} />},
  {id: 7, label: 'Chat', icon: <FaComments size={24} />},
  {id: 8, label: 'Support', icon: <FaHeartbeat size={24} />},
  {id: 9, label: 'Setting', icon: <FaCog size={24} />},
]

export default navLinks
