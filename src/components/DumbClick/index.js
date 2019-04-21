import React from 'react';
// import src from '*.bmp';
// import { Module } from 'module';


const DumbClick = (props) => {
    // console.log(props);
       return (
            <div>
                <img 
                className="responsive-img rounded col l4" 
                src={props.url} 
                alt="Click on this to play"
                onClick={() => props.handleClick()}>
                </img>
            </div>
       );
   };

export default DumbClick;