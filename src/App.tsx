import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Router from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import AsideTab from './container/AsideTab'

import { store } from './store'
import { ScrollToTop } from './utils'

import GlobalCSS from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Header />
        <ScrollToTop />
        <Router />
        <Footer />
        <AsideTab />
      </BrowserRouter>
    </Provider>
  )
}

export default App
