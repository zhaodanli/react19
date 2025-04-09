import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App1 from './apps/App1.jsx'
import App2 from './apps/App2.jsx'
import App3 from './apps/App3.jsx'

const isProduction = process.env.NODE_ENV === "production";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App3 />
  </StrictMode>
)
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <h3>APP1</h3>
//     <App1 />
//     <h3>APP2</h3>
//     <App2 /> 
//     <h3>APP3</h3>
//     <App3 />
//   </StrictMode>
// )
