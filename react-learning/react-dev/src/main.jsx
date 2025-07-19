import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sculptures from './components/Sculptures.jsx'
import Form from './components/StateAsA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  <Sculptures />
  <Form />
)
