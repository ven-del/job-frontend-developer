import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/header'
import GlobalStyle from './styles/globalStyles'
import SearchBar from './components/SearchBar/SearchBar'
import NewsList from './components/NewsList/NewsList'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <SearchBar />
    <NewsList />
    <GlobalStyle />
  </StrictMode>,
)


