import {FaLungs, FaTooth, FaBone} from 'react-icons/fa'

const healthStatusCards = [
  {
    id: 1,
    title: 'Lungs',
    date: '26 Oct 2021',
    status: 'Critical',
    progress: 30,
    color: '#f87171',
    icon: <FaLungs />,
  },
  {
    id: 2,
    title: 'Teeth',
    date: '26 Oct 2021',
    status: 'Healthy',
    progress: 90,
    color: '#4ade80',
    icon: <FaTooth />,
  },
  {
    id: 3,
    title: 'Bone',
    date: '26 Oct 2021',
    status: 'Moderate',
    progress: 50,
    color: '#f97316',
    icon: <FaBone />,
  },
]

export default healthStatusCards
