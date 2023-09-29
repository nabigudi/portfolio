import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { ParticlesOptions } from "../../helpers/ParticlesOptions";
import { useCallback } from 'react';

const Layout = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
}, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);


  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesOptions}
      />
      <Sidebar top/>
      <Sidebar />
      <div className="page">
        <div className="tags top-tags">
          <span>&lt;html&gt;</span>
          <span className="tag-body">&lt;body&gt;</span>
        </div>
        <Outlet />
        <div className="tags bottom-tags">
          <span className="tag-body">&lt;&#47;body&gt;</span>
          <span>&lt;&#47;html&gt;</span>
        </div>
      </div>
    </div>
  )
}

export default Layout
