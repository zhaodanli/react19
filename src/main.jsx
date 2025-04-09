import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App1 from './apps/App1.jsx'
import App2 from './apps/App2.jsx'
import App3 from './apps/App3.jsx'
import App4 from './apps/App4.jsx'

const isProduction = process.env.NODE_ENV === "production";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App4 />
  </StrictMode>
)
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <h3>ErrorBoundary原理</h3>
//     <App1 />
//     <h3>useHooks</h3>
//     <App2 /> 
//     <h3>严格模式</h3>
//     <App3 />
//     <h3>Suspense</h3>
//     <App4 />
//   </StrictMode>
// )
