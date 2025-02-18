import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Temp from './temp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Temp />
  </StrictMode>,
)
