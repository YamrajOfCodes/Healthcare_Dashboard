import React, { useState } from 'react';
import { Menu, X, Home, User, Settings,Phone, ChartNoAxesCombined, HistoryIcon, MessageCircleMore ,LayoutDashboard,CalendarDays,ClipboardPlus} from 'lucide-react';
import "./sidebar.css"

const Sidebar = () => {
     const [isOpen, setIsOpen] = useState(false);
    
      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
    
      const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
        { icon: HistoryIcon, label: 'History', href: '#' },
        { icon: CalendarDays, label: 'Calender', href: '#' },
        { icon: ClipboardPlus, label: 'Appointments', href: '#' },
        { icon: ChartNoAxesCombined, label: 'Statistics', href: '#' },
      ];
    
       const menuItems1 = [
        { icon: MessageCircleMore, label: 'Chat', href: '#' },
        { icon: Phone, label: 'Support', href: '#' },
      ];
    
       const menuItems2 = [
        { icon: Settings, label: 'Setting', href: '#' },
      ];
    
  return (
    <>
    <div className="app-container">
        {/* Mobile overlay */}
        <div 
          className={`overlay ${isOpen ? 'active' : ''}`}
          onClick={toggleSidebar}
        />

        {/* Sidebar */}
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          {/* Sidebar header */}
          <div className="sidebar-header">
            <h2 className="sidebar-title"><span style={{color:'rgb(76 255 251)'}}>Health</span><span style={{color:"#2F2D57"}}>care</span></h2>
            <button
              onClick={toggleSidebar}
              className="close-btn"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation menu */}
          <nav className="nav-menu">
            <ul className="nav-list">
              <h4>General</h4>
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index} className="nav-item">
                    <a
                      href={item.href}
                      className={`nav-link ${index === 0 ? 'active' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent size={24} className="nav-icon" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <ul className="nav-list" style={{marginTop:'4vh'}}>
              <h4>Tools</h4>
              {menuItems1.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index} className="nav-item">
                    <a
                      href={item.href}
                      className={`nav-link `}
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent size={24} className="nav-icon" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="sidebar-footer">
             {menuItems2.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index} className="nav-item">
                    <a
                      href={item.href}
                      className={`nav-link `}
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent size={24} className="nav-icon" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleSidebar}
          className="menu-btn"
        >
          <Menu size={24} />
        </button>

        
      </div>
    </>
  )
}

export default Sidebar