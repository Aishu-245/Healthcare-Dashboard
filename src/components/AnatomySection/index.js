import './index.css'
import {FaHeart} from 'react-icons/fa'
import {GiLeg} from 'react-icons/gi'

const Anatomy = () => (
  <div className="anatomy-wrapper">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKxlsQq6FRIK_-40iBh01tOgMi387tjqe4y_ETzoY2rSxbuYjU8o6bZow5VAqkHQZROI&usqp=CAU"
      alt="Human Anatomy"
      className="anatomy-image"
    />

    <div className="scanner glow-chest" />
    <div className="label label-heart">
      <FaHeart style={{marginRight: '4px', color: '#ff4d4f'}} />
      Healthy Heart
    </div>

    <div className="scanner glow-leg" />
    <div className="label label-leg">
      <GiLeg style={{marginRight: '4px', color: '#f5c8a5'}} />
      Healthy Leg
    </div>
  </div>
)

export default Anatomy
