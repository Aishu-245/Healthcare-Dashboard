import './index.css'
import activityData from '../../data/activityData'

const Activity = () => {
  const totalAppointments = activityData.reduce(
    (sum, item) => sum + item.appointments,
    0,
  )

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <span className="activity-subtitle">
          {totalAppointments} appointments this week
        </span>
      </div>

      <div className="activity-bars">
        {activityData.map((item, index) => (
          <div className="bar-group" key={index}>
            <div className="bar">
              {item.bars.map((height, i) => (
                <div
                  key={i}
                  className={`bar-segment bar-${i + 1}`}
                  style={{height: `${height}px`}}
                ></div>
              ))}
            </div>
            <span className="bar-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activity
