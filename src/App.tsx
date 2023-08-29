import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Layout from './components/Layout'
import Works from './views/Works'
import Portfolio from './views/Portfolio'
import Dashboard from './views/Dashboard'
import SelectedPorfolio from './views/Portfolio/Selected'
import SelectedWork from './views/Works/Selected'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/selectedWork" element={<SelectedWork />} />
          <Route path="/selectedPortfolio" element={<SelectedPorfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
