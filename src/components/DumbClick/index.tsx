import React from 'react';
import { Grid, createStyles } from '@material-ui/core';
import Paper from "@material-ui/core/Paper"
// import { className } from 'postcss-selector-parser';
// import { Module } from 'module';
// import pic from "../../images/bro"
// import { CardMedia } from '@material-ui/core';
// import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css/dist/js/materialize.min.js'

import yellow from "@material-ui/core/colors/yellow"

interface Props {
    handleClick: CallableFunction, 
    key: string,
    src: string, 
    data: string
}

const picHeight = {
    // display: "flex",
    backgroundSize: "cover"
};

const picBackground = {
    padding: "2%"
}

const DumbClick: React.FunctionComponent<Props> = (props) => {
    // console.log(props);
    const { ...classes } = props
       return (
            <Grid 
                item={true}
                sm={4}
                lg={4}
                style={picBackground} 
            >
                <img
                style={picHeight}
                className="responsive-img" 
                src={props.src} 
                alt="Click on this to play"
                // data: any={props.data}
                onClick={(event) => {
                    props.handleClick(JSON.stringify(props.src))
                }}>
                </img>
            </Grid>
       );
   };
   export default DumbClick;
