import Header from './components/Header'
import SidebarItem from './components/SidebarItem'
import DashboardMainContent from './components/DashboardMainContent'
import navLinks from './data/navigationLinks'
import './App.css'

const App = () => {
  const topLinks = navLinks.filter(link => link.label !== 'Setting')
  const settingLink = navLinks.find(link => link.label === 'Setting')

  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-body">
        <aside className="sidebar">
          <h3 className="section-title">General</h3>
          <ul className="nav-list">
            {topLinks.map(each => (
              <SidebarItem links={each} key={each.id} />
            ))}
            <SidebarItem links={settingLink} key={settingLink.id} />
          </ul>
        </aside>

        <nav className="toggle-bar">
          <ul className="toggle-nav-list">
            {[...topLinks, settingLink].map(link => (
              <SidebarItem key={link.id} links={link} />
            ))}
          </ul>
        </nav>

        <main className="main-content">
          <DashboardMainContent />
        </main>
      </div>
    </div>
  )
}

export default App
