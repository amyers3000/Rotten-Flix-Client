import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);