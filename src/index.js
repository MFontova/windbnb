import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { GlobalStyle } from './styles'
import { FiltersProvider } from './context/contextFilter'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <FiltersProvider>
      <GlobalStyle />
      <App />
    </FiltersProvider>
  </React.StrictMode>
)
