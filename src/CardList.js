import React from 'react';
import { robots } from './robots.js';
import Card from './Card'

const CardList = () => {
    const cardComponent = robots.map((user, i) => {
        return (
            <Card 
                id={robots[i].id}
                name={robots[i].name}
                username={robots[i].username}
                email={robots[i].email}
            />
        )
    })
    return (
        <React.StrictMode>
        <div>
            {cardComponent};
        </div>
      </React.StrictMode>
    );
}

export default CardList;