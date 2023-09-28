import { BrowserRouter } from 'react-router-dom'

import { GlobalCSS } from './styles'
import Header from './components/Header'
import Router from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCSS />
        <Header />
        <div className="container">
          <Router />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
