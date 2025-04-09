import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App1 from './apps/App1.jsx'
import App2 from './apps/App2.jsx'

const isProduction = process.env.NODE_ENV === "production";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App1 />
    {/* <App2 />  */}
  </StrictMode>,
)
