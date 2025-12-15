import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './store.jsx'
import { store1 } from './store1.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store1}>
      <App />
    </Provider>
    
  </StrictMode>,
)
