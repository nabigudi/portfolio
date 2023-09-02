import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar top/>
      <Sidebar />
      <div className="page">
        <div className="tags top-tags">
          <span>&lt;html&gt;</span>
          <span className="tag-body">&lt;body&gt;</span>
        </div>
        <Outlet />
        <div className="tags bottom-tags">
          <span className="tag-body">&lt;body&gt;</span>
          <span>&lt;html&gt;</span>
        </div>
      </div>
    </div>
  )
}

export default Layout
