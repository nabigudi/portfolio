import React, { createContext, useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import "./index.scss";
import Item from "./Item";
import Data from "../../data/jobs.json"
import { Job } from "../../types/Job";

const Works = () => { 
    const [jobs, setJobs] = useState<Job[]>([]);
    useEffect(() => {
      setJobs(Data.jobs)
    }, []);

    const renderJobs = (jobs: Job[]) => {
      return (
        <div className="jobs-container">
          {
            jobs.map((port, idx) => {
                return (
                  <div className="jobs-box" key={idx}>
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