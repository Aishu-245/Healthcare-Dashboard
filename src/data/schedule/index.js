import {FaCheckCircle, FaEye, FaHeart, FaBrain} from 'react-icons/fa'

const Schedule = [
  {
    day: 'Thursday',
    appointments: [
      {
        title: 'Health checkup complete',
        time: '11:00 AM',
        icon: <FaCheckCircle />,
      },
      {
        title: 'Ophthalmologist',
        time: '14:00 PM',
        icon: <FaEye />,
      },
    ],
  },
  {
    day: 'Saturday',
    appointments: [
      {
        title: 'Cardiologist',
        time: '12:00 AM',
        icon: <FaHeart />,
      },
      {
        title: 'Neurologist',
        time: '16:00 PM',
        icon: <FaBrain />,
      },
    ],
  },
]

export default Schedule
