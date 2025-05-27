import './index.css'

const Upcoming = ({name, time, doctor, icon, iconBg, type}) => {
  const isDark = type === 'dark'

  return (
    <li className={`calendar-appointment-card ${isDark ? 'dark' : 'light'}`}>
      <div className="calendar-appointment-details">
        <h1 className="calendar-appointment-title">{name}</h1>
        <p className="calendar-appointment-time">{time}</p>
        <p className="calendar-appointment-doctor">{doctor}</p>
      </div>
      <div
        className="calendar-appointment-icon-container"
        style={{backgroundColor: iconBg}}
      >
        {icon}
      </div>
    </li>
  )
}

export default Upcoming
