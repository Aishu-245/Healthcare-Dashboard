import {FaTooth} from 'react-icons/fa'
import {GiMuscleUp} from 'react-icons/gi'

const calendarAppointments = [
  {
    title: 'Dentist',
    time: '09:00 - 11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: <FaTooth style={{color: 'white', fontSize: '20px'}} />,
    iconBg: '#4f46e5',
    type: 'dark',
  },
  {
    title: 'Physiotherapy Appointment',
    time: '11:00 - 12:00',
    doctor: 'Dr. Kevin Djones',
    icon: <GiMuscleUp style={{color: 'white', fontSize: '20px'}} />,
    iconBg: '#e0e7ff',
    type: 'light',
  },
]

export default calendarAppointments
