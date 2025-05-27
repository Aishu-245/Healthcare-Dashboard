import './index.css'

const SidebarItem = ({links}) => {
  const {label, icon} = links
  const isSetting = label === 'Setting'
  const isActive = label === 'Dashboard'

  return (
    <li className={`sidebar-item ${isSetting ? 'setting-item' : ''}`}>
      <div className={`sidebar-link ${isActive ? 'active' : ''}`}>
        <span className="sidebar-icon">{icon}</span>
        <p className="sidebar-label">{label}</p>
      </div>
    </li>
  )
}

export default SidebarItem
