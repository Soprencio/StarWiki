import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchProvider } from './context/SearchContext'
import { FilterProvider } from './context/FilterContext'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <SearchProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </SearchProvider>
    </HelmetProvider>
  </StrictMode>,
)
