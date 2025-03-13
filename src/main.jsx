import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Header from './pages/header/header.jsx';
import Footer from './pages/footer/footer.jsx';

createRoot(document.getElementById('root')).render(
  <>
  <Header />
    <App />
  <Footer />
  </>

)
