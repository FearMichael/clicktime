import React from 'react';
// import { className } from 'postcss-selector-parser';
// import { Module } from 'module';
// import pic from "../../images/bro"
import { CardMedia } from '@material-ui/core';
// import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css/dist/js/materialize.min.js'
import Grid from "@material-ui/core/Grid"

interface Props {
    handleClick: CallableFunction, 
    key: string,
    src: string, 
    data: string
}

const DumbClick: React.FunctionComponent<Props> = (props) => {
    // console.log(props);
       return (
            <Grid item className="col l4">
                <CardMedia 
                className="responsive-img"
                image="picture" 
                src={props.src} 
                // alt="Click on this to play"
                // data={props.data}
                onClick={(event) => {
                    props.handleClick(JSON.stringify(props.data))
                    }}>
                </CardMedia>
            </Grid>
       );
   };

export default DumbClick;