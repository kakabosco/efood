import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
// import Categories from './pages/LaDolceVita'

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/la-dolce-vita" element={<Home />} /> {/* <Categories /> */}
  </Routes>
)

export default Router
