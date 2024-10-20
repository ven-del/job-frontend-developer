import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Header from './components/Header/header'
import GlobalStyle from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <GlobalStyle />
  </StrictMode>,
)
