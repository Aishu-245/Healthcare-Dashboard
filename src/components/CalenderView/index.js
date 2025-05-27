import './index.css'

const Calender = props => {
  const {date, day, list, active} = props

  const dateNumber = parseInt(date)
  const isToday = dateNumber === 26
  const isLightHighlight = [28, 30].includes(dateNumber)
  const isInactiveDay = dateNumber === 31

  return (
    <li
      className={`calendar-tile 
        ${isToday ? 'today-tile' : ''} 
        ${isLightHighlight ? 'light-highlight-tile' : ''} 
        ${isInactiveDay ? 'inactive-tile' : ''}`}
    >
      <h1 className="calendar-day">{day}</h1>
      <p className="calendar-date">{date}</p>
      <div className="calendar-times">
        {list.map((time, index) => {
          const isEmpty = time === '-'
          const isActive = time === active
          const isLightActive = isLightHighlight && isActive

          return (
            <div
              className={`calendar-time-slot
                ${isEmpty ? 'empty' : ''}
                ${isToday && isActive ? 'active-slot' : ''}
                ${isLightActive ? 'light-active-slot' : ''}
                ${isInactiveDay ? 'inactive-slot' : ''}`}
            >
              <span className="dot" />
              <span className="time-label">{isEmpty ? '-' : time}</span>
            </div>
          )
        })}
      </div>
    </li>
  )
}

export default Calender
