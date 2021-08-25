import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{padding: '10px', overflow: 'scroll', border: '5px solid black', height: '700px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;