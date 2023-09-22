import { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import "./index.scss";
import Item from "./Item";
import Data from "../../data/portfolio.json"
import { Portfolio as PortfolioType } from "../../types/Portfolio";
import useScreenSize from "../../helpers/useScreenSize";
import Slider from "react-slick";

const Portfolio = () => { 
    const screenSize = useScreenSize();
    const [portfolio, setPortfolio] = useState<PortfolioType[]>([]);
    useEffect(() => {
      setPortfolio(Data.portfolio)
    }, []);
  
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "ease-out",
      fade: true,
    };
  
    const renderPortList = (portfolio: PortfolioType[]) => {
      return portfolio.map((port, idx) => {
        return (
          <div className="portfolio-box" key={idx}>
            <Item item={port} />
          </div>
        )
    })
    }
  
    const renderPorts = (portfolio: PortfolioType[]) => {
      return (
        <div className="portfolio-container">
          {
            screenSize.width < 961 ?
              <Slider {...settings}>
                {renderPortList(portfolio)}
              </Slider>
            :
            renderPortList(portfolio)
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
               {renderPorts(portfolio)}
            </section>
          </div>

        </div>
      </>
    )
}

export default Portfolio;