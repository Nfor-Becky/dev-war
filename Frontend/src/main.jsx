import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Provider } from "@/components/provider"
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
