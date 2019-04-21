import React, { Component } from 'react';
import { Module } from 'module';


const DumbClick = (props) => {
       return (
            <div>
                <img 
                className="responsive-img rounded col l4" 
                src="https://source.unsplash.com/random" 
                alt="Click on this to play"
                onClick={() => this.handleClick()}>
                </img>
            </div>
       );
   };

export default DumbClick;