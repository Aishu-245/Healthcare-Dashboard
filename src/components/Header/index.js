import './index.css'
import {FaSearch, FaBell, FaUserCircle, FaPlus} from 'react-icons/fa'

const Header = () => (
  <div className="header">
    <h1 className="logo">
      Health<span className="logo span">care</span>.
    </h1>

    <div className="search-bar">
      <FaSearch className="icon search-icon" />
      <input type="search" placeholder="Search" />
      <div className="bell-wrapper">
        <FaBell className="icon bell-icon" />
      </div>
    </div>

    <div className="user-icons">
      <FaUserCircle className="icon user-icon" />
      <div className="plus-button">
        <FaPlus className="icon plus-icon" />
      </div>
    </div>
  </div>
)

export default Header
