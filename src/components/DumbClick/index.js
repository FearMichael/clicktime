import React from 'react';
// import src from '*.bmp';
// import { Module } from 'module';
// import pic from "../../images/bro"
// import { CardMedia } from '@material-ui/core';
// import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css/dist/js/materialize.min.js'


const DumbClick = (props) => {
    // console.log(props);
       return (
            <div className="col l4">
                <img 
                className="responsive-img" 
                src={props.src} 
                alt="Click on this to play"
                data={props.data}
                onClick={(event) => {
                    props.handleClick(JSON.stringify(props.data))
                    }}>
                </img>
            </div>
       );
   };

export default DumbClick;