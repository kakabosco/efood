import { BrowserRouter } from 'react-router-dom'

import Router from './routes'
import { GlobalCSS } from './styles'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCSS />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
