import './index.css'

const Health = ({list}) => {
  const {title, date, status, progress, icon, color} = list

  return (
    <li className="health-card">
      <div className="health-card-header">
        <div className="health-icon" style={{backgroundColor: `${color}20`}}>
          {icon}
        </div>
        <div>
          <h3 className="health-title">{title}</h3>
          <p className="health-date">Date: {date}</p>
        </div>
      </div>

      <div className="health-status-row">
        <span className="health-status">{status}</span>
        <span className="health-percentage">{progress}%</span>
      </div>

      <div className="progress-bar-wrapper">
        <div
          className="progress-bar-fill"
          style={{width: `${progress}%`, backgroundColor: color}}
        />
      </div>
    </li>
  )
}

export default Health
