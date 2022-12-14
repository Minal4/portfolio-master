import React from 'react';
import { useEffect, useState } from "react";
import ExampleDoc from '../files/resume.pdf';

export const Main = () => {
  const [Name, setName] = useState();
  useEffect(() => {
    const n = 8; // Or something else

    setName([...Array(n)].map((e, i) => <span className='marque' key={i}>Portfolio</span>));
  }, [])

  console.log(Name, 'object')
  return (
    <>
      <section className="section about-section">
        <div className="inner_wrap container">
          <div className="about__inner">
            <h2>{`Minal - FrontEnd Web Designer & Enthusiast`}</h2>
            <div className="about__content">
              <p>
                Hello, I’m Minal. My relationship with Web Design started at a
                young age, and has become my life-long love. On this website,
                you’ll discover some of my most changeling and intimate design
                I’ve taken date.
              </p>
              <div className="excerpt-btn">
                <button className="btn__link">Contact us</button>
                <a href={ExampleDoc} download="resume" target='_blank' rel='noopener noreferrer'>
                  <button className='btn__link'>Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-slide"><div className='inner-slide'>{Name}</div></div>
    </>
  );
};
