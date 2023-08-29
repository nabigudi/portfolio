import { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import "./index.scss";
import Item from "./Item";
import Data from "../../data/portfolio.json"
import { Portfolio as PortfolioType } from "../../types/Portfolio";

const Portfolio = () => { 
    const [portfolio, setPortfolio] = useState<PortfolioType[]>([]);
    useEffect(() => {
      setPortfolio(Data.portfolio)
    }, []);

    const renderPortfolio = (portfolio: PortfolioType[]) => {
      return (
        <div className="portfolio-container">
          {
            portfolio.map((port, idx) => {
                return (
                  <div className="portfolio-box" key={idx}>
                      <Item item={port} />
                  </div>
                )
            })
          }
        </div>
      );
    }

    return (
      <>
        <div className="container portfolio-page">
          <div className="portfolio-zone">
            <h1>
              <AnimatedLetters
                strArray={'Portfolio'.split('')}
                idx={10}
              />
            </h1>
            <section className="portfolio-section">
               {renderPortfolio(portfolio)}
            </section>
          </div>

        </div>
      </>
    )
}

export default Portfolio;