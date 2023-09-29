import { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import "./index.scss";
import Item from "./Item";
import { Portfolio } from "../../types/Portofolio";
import useScreenSize from "../../helpers/useScreenSize";
import Slider from "react-slick";

const Jobs = ({portfolioList, title} : { portfolioList: Portfolio[], title: string} ) => { 
  const screenSize = useScreenSize();
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  useEffect(() => {
    setPortfolio(portfolioList)
  }, [portfolioList]);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-out",
    fade: true,
  };

  const renderJobList = (portfolio: Portfolio[]) => {
    return portfolio.map((port, idx) => {
      return (
        <div className="portfolio-box" key={idx}>
          <Item item={port} />
        </div>
      )
  })
  }

  const renderJobs = (portfolio: Portfolio[]) => {
    return (
      <div className="portfolio-container">
        {
          screenSize.width < 961 ?
            <Slider {...settings}>
              {renderJobList(portfolio)}
            </Slider>
          :
            renderJobList(portfolio)
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
              strArray={title.split('')}
              idx={10}
            />
          </h1>
          <section className="portfolio-section">
              {renderJobs(portfolio)}
          </section>
        </div>

      </div>
    </>
  )
}

export default Jobs;