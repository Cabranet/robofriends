import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='bg-light-green dib br4 pa4 ma2 grow bw2 shadow-3'>
            <img alt='robots' src={`https://robohash.org/${id}?300x300}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;