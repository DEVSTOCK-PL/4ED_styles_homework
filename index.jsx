import { createRoot } from 'react-dom'

import App from './src/App.jsx'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App tab='home' />)