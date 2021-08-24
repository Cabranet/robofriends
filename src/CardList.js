import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='bg-light-green dib br4 pa4 ma2 grow bw2 shadow-3'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return (
            <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
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