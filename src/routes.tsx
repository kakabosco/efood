import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LaDolceVita from './pages/LaDolceVita'
import HiokiSushi from './pages/HiokiSushi'

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/la-dolce-vita" element={<LaDolceVita />} />
    <Route path="/hioki-sushi" element={<HiokiSushi />} />
  </Routes>
)

export default Router
