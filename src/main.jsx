import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './provider/AuthProvider.jsx'
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from './provider/ThemeProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <div className='bg-teal-100'>
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer position="top-center"></ToastContainer>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
)
