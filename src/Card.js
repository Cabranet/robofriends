import React from 'react';

const Card = (props) => {
    return (
        <div className='bg-light-blue dib br2 pa4 ma2 grow bw2 shadow-4'>
            <img alt='robots' src={`https://robohash.org/${props.id}?300x300}`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}
export default Card;