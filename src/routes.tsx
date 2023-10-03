import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurants/:id" element={<Restaurant />} />
  </Routes>
)

export default Router
