import React from 'react';
import PropTypes, { number } from 'prop-types';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import red from "@material-ui/core/colors/red"
import lightGreen from "@material-ui/core/colors/lightGreen"
import Grid from "@material-ui/core/Grid"


const styles = {
  root: {
    flexGrow: 1,
    // lightGreen: {lightGreen},
  },
};

const losingColor = {
    color: "red",
    margin: 0,
    fontWeight: 700
}

const winningColor = {
    color: "green",
    margin: 0,
    fontWeight: 700

}

export interface Props {
    score: number,
    message: string,
    lost: boolean,
    highScore: number
}

export interface Props extends WithStyles<typeof styles> {}

function SimpleAppBar(props: Props) {
    const { classes } = props;
    
  return (
    <div className={classes.root}>
      <AppBar 
        position="fixed" color="default">
        <Toolbar>
            <Grid 
            container={true}
            alignContent="center"
            alignItems="center"
            >
                <Grid item={true} xs={4}>
                <Typography variant="h2" color="inherit">
                    Time. To. Click.
                </Typography>
                </Grid>
                <Grid item={true} xs={2}>
                <Typography variant="h3" color="default" >
                    Score: {props.score}
                </Typography>
                </Grid>
                <Grid item={true} xs={4}>
                <Typography variant="h2" color="default" style={props.lost ? losingColor :  winningColor}>
                    {props.message}
                </Typography>
                </Grid>
                <Grid item={true} xs={2}>
                <Typography variant="h3" color="default">
                    High Score: {props.highScore}
                </Typography>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(SimpleAppBar);
