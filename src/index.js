import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginForm from './login/LoginForm'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>
)
