import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import AppLayouts from './layouts/appLayouts/AppLayouts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayouts />
  </StrictMode>,
)
