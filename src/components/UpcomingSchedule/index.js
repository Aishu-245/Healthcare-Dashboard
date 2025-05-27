import './index.css'

const Appointment = ({title, time, icon}) => (
  <div className="appointment-pill">
    <div className="appointment-info">
      <h4 className="appointment-title">{title}</h4>
      <p className="appointment-time">{time}</p>
    </div>
    <div className="appointment-icon">{icon}</div>
  </div>
)

export default Appointment
