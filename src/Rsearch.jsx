import React from 'react';
const Rsearch = (props) =>{
            const name = props.name;
            const img = `https://source.unsplash.com/600x400/?${name}`;
    return (
        <>
            <div className="img">
            <img src={img} alt="img"/>
            </div>
        </>
    )
};

export default Rsearch;