import React, { createContext, useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import "./index.scss";
import Item from "./Item";
import Data from "../../data/jobs.json"
import { Job } from "../../types/Job";
import useScreenSize from "../../helpers/useScreenSize";
import Slider from "react-slick";

const Works = () => { 
  const screenSize = useScreenSize();
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    setJobs(Data.jobs)
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-out",
    fade: true,
  };

  const renderJobList = (jobs: Job[]) => {
    return jobs.map((job, idx) => {
      return (
        <div className="jobs-box" key={idx}>
          <Item item={job} />
        </div>
      )
  })
  }

  const renderJobs = (jobs: Job[]) => {
    return (
      <div className="jobs-container">
        {
          screenSize.width < 961 ?
            <Slider {...settings}>
              {renderJobList(jobs)}
            </Slider>
          :
            renderJobList(jobs)
        }
      </div>
    );
  }

  return (
    <>
      <div className="container jobs-page">
        <div className="jobs-zone">
          <h1>
            <AnimatedLetters
              strArray={'Works'.split('')}
              idx={10}
            />
          </h1>
          <section className="jobs-section">
              {renderJobs(jobs)}
          </section>
        </div>

      </div>
    </>
  )
}

export default Works;