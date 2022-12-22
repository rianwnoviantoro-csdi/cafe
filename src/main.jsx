import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'
import App from './App'
import './index.css'
import { store } from './redux/store'

if (process.env.NODE_ENV === 'production') disableReactDevTools()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
