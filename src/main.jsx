import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import ContextProvider from './context/Context.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ContextProvider>
        <BrowserRouter>
        <AuthProvider>
    <App />
        </AuthProvider>
        </BrowserRouter>
      </ContextProvider>
    </ThemeProvider>
  </StrictMode>,
)
