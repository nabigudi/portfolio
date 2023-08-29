import { ReactNode, useEffect, useState } from 'react'
import './index.scss'

interface Tab {
  name: string;
  reference: string;
  component: ReactNode;
}
interface AnimatedTabsProps {
  tabs: Tab[];
}
const AnimatedTabs = ({ tabs }: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
    <div className="container">
      <div className="tab">
        <div className="menu">
          {tabs.map((tab, index) => (
            <div key={index} className={"menu__item menu__item--"+index} onClick={() => setActiveTab(index)}>{tab.name}</div>
          ))}
          <div className="menu__line"></div>
        </div>
        <div className="menu__content">
          {tabs.map((tab, index) => (
            <>
              {activeTab === index && 
                <div key={index}>{tab.component}</div>
              }
            </>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default AnimatedTabs