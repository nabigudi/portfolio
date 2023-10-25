import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Layout from './components/Layout'
import Dashboard from './views/Dashboard'
import JobList from "./data/jobs.json"
import PortfolioList from "./data/portfolio.json"
import Portfolio from './views/Portfolio'
import SelectedPorfolio from './views/Portfolio/Selected'
import SelectedWork from './views/Portfolio/Selected'
import './App.scss'
import { useEffect } from 'react'
import { useAppDispatch } from './redux/hooks'
import { getCurrentSeason, getCurrentSeasonParticles } from './redux/slices/commonSlice'
import "pathseg";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentSeason());
    dispatch(getCurrentSeasonParticles());
  }, []);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Portfolio portfolioList={JobList.jobs} title="Works"/>} />
          <Route path="portfolio" element={<Portfolio portfolioList={PortfolioList.portfolio} title="Portfolio"/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="selectedWork" element={<SelectedWork />} />
          <Route path="selectedPortfolio" element={<SelectedPorfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
