import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const Accordion = ({ item }) => {
  const [active, setActive] = useState(false);

  console.log(item, '@items');
  return (
    <div className="faq__accordion">
      <h3 onClick={() => setActive(!active)}>
        {item.question}{' '}
        <span>{active ? <FaChevronUp /> : <FaChevronDown />}</span>
      </h3>
      {active && <p className={active ? 'active' : ''}>{item.answer}</p>}
    </div>
  );
};
