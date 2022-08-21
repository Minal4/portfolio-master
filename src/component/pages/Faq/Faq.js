import React, { useState } from 'react';
import { Accordion } from './Accordion';
import { Progress } from './Progress';

export const Faq = () => {
  const questions = [
    {
      question: 'Fully Customizable Design & Layout',
      answer:
        'the services we offer and involve preparing a financial plan or rendering financial consultation for client based on the client’s financial goals  and objectives asdas.',
    },

    {
      question: 'Fluid, Responsive & Ratina Ready',
      answer:
        'the services we offer and involve preparing a financial plan or rendering financial consultation for client based on the client’s financial goals  and objectives asdas.',
    },
    {
      question: 'Seo Optimized & Valid Code',
      answer:
        'the services we offer and involve preparing a financial plan or rendering financial consultation for client based on the client’s financial goals  and objectives asdas.',
    },
  ];
  const [data, setData] = useState(questions);
  // const clickHandler = (index) => {
  //   setActive(!active);
  // };
  return (
    <section className="faq section">
      <div className="container">
        <div className="section__heading">
          <h2>FAQ</h2>
        </div>
        <div className="row gx-5">
          <div className="col-md-6">
            <div className="faq__accordion">
              {data.map((item, index) => {
                return <Accordion key={index} item={item} />;
              })}
            </div>
          </div>
          <div className="col-md-6">
            <Progress />
          </div>
        </div>
      </div>
    </section>
  );
};
