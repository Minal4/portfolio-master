import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

export const Progress = () => {
  return (
    <div className="stats">
      <ul>
        <li>
          <h3>Photoshop</h3>
          <ProgressBar bgColor="#00f5ff" completed={50} />
        </li>
        <li>
          <h3>CSS3</h3>
          <ProgressBar bgColor="#264de4" completed={85} />
        </li>
        <li>
          <h3>HTML5</h3>
          <ProgressBar bgColor="#00f5ff" completed={70} />
        </li>
        <li>
          <h3>JQUERY</h3>
          <ProgressBar bgColor="#00f5ff" completed={40} />
        </li>
        <li>
          <h3>SASS</h3>
          <ProgressBar bgColor="#c69" completed={55} />
        </li>
        <li>
          <h3>Bootstrap</h3>
          <ProgressBar bgColor="#563d7c" completed={75} />
        </li>
        <li>
          <h3>Wordpress</h3>
          <ProgressBar bgColor="#21759b" completed={55} />
        </li>
        <li>
          <h3>Elementor (Learning)</h3>
          <ProgressBar bgColor="#950841" completed={30} />
        </li>
        <li>
          <h3>React (Learning)</h3>
          <ProgressBar bgColor="#61dbfb" completed={25} />
        </li>
      </ul>
    </div>
  );
};
