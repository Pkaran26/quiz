import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/luna-amber/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
