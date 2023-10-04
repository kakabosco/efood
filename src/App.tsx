import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Router from './routes'
import { store } from './store'
import { GlobalCSS } from './styles'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
