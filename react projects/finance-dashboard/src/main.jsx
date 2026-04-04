import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global styles — order matters: index first, then layout, components, animations, responsive
import './styles/index.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/responsive.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
