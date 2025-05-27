import './index.css'

import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

import DashboardOverview from '../DashboardOverview'

import calenderGrid from '../../data/calenderGrid'

import Calender from '../CalenderView'

import calenderAppointments from '../../data/calenderAppointments'

import Appointment from '../UpcomingSchedule'

import Upcoming from '../AppointmentCard'

import schedule from '../../data/schedule'

const DashboardMainContent = () => (
  <div className="dashboard-main-container">
    <DashboardOverview />

    <div className="dashboard-right-panel">
      <div className="calendar-header">
        <h1 className="calendar-month">October 2021</h1>
        <div className="calendar-navigation-icons">
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>

      <ul className="calendar-week-grid">
        {calenderGrid.map(each => (
          <Calender
            date={each.date}
            day={each.day}
            list={each.slots}
            active={each.activeSlot}
            key={each.date + each.day}
          />
        ))}
      </ul>

      <ul className="calendar-appointments-list">
        {calenderAppointments.map((item, index) => (
          <Upcoming
            key={item.title}
            name={item.title}
            time={item.time}
            doctor={item.doctor}
            icon={item.icon}
            iconBg={item.iconBg}
            type={item.type}
          />
        ))}
      </ul>

      {schedule.map(each => (
        <div className="calendar-schedule-day" key={each.day}>
          <h3 className="calendar-day-heading">{`On ${each.day}`}</h3>
          <div className="calendar-appointment-bubbles">
            {each.appointments.map(appt => (
              <Appointment
                key={appt.title}
                day={each.day}
                title={appt.title}
                time={appt.time}
                icon={appt.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default DashboardMainContent
