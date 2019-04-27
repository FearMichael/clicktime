import React from 'react';
// import { className } from 'postcss-selector-parser';
// import { Module } from 'module';
// import pic from "../../images/bro"
// import { CardMedia } from '@material-ui/core';
// import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css/dist/js/materialize.min.js'

interface Props {
    handleClick: CallableFunction, 
    key: string,
    src: string, 
    data: string
}

const DumbClick: React.FunctionComponent<Props> = (props) => {
    // console.log(props);
       return (
            <div className="col l4">
                <img 
                className="responsive-img" 
                src={props.src} 
                alt="Click on this to play"
                // data: any={props.data}
                onClick={(event) => {
                    props.handleClick(JSON.stringify(props.data))
                    }}>
                </img>
            </div>
       );
   };

export default DumbClick;