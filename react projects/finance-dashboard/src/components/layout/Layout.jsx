import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useAppContext } from '../../hooks/useAppContext';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { state } = useAppContext();

  // Close drawer on page navigation (handled via currentPage change)
  useEffect(() => {
    setSidebarOpen(false);
  }, [state.currentPage]);

  // Close drawer when viewport widens past mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const handler = (e) => { if (e.matches) setSidebarOpen(false); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  function openSidebar()  { setSidebarOpen(true);  }
  function closeSidebar() { setSidebarOpen(false); }

  return (
    <div className="app-shell">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' visible' : ''}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Main column */}
      <div className="main">
        <Header onMenuClick={openSidebar} />
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
}
