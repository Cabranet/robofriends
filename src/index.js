import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js'
import 'tachyons';
import './index.css';
import { robots } from './robots.js';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card 
        id={robots[0].id}
        name={robots[0].name}
        username={robots[0].username}
        email={robots[0].email}
      />
      <Card 
        id={robots[1].id}
        name={robots[1].name}
        username={robots[1].username}
        email={robots[1].email}
      />
      <Card 
        id={robots[2].id}
        name={robots[2].name}
        username={robots[2].username}
        email={robots[2].email}
      />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

