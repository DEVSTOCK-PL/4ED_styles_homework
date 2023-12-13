import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient, QueryClientProvider} from "react-query"
import { UserProvider } from './Hooks/UserContext.jsx'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <UserProvider>
    <QueryClientProvider client={client}>
      <App />
      </QueryClientProvider>
      </UserProvider>
  </React.StrictMode>,
)
