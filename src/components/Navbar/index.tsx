import React from 'react';
import PropTypes, { number } from 'prop-types';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import red from "@material-ui/core/colors/red"
import lightGreen from "@material-ui/core/colors/lightGreen"


const styles = {
  root: {
    flexGrow: 1,
    // lightGreen: {lightGreen},
  },
};

const navbarStyle = {

}

export interface Props {
    score: number,
    message: string
}

export interface Props extends WithStyles<typeof styles> {}

function SimpleAppBar(props: Props) {
    const { classes } = props;
    
  return (
    <div className={classes.root}>
      <AppBar 
        style={navbarStyle}
        position="fixed" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Time. To. Click.
          </Typography>
          <Typography variant="h6" color="default">
              Score: {props.score}
          </Typography>
          <Typography variant="h6" color="default">
            {props.message}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(SimpleAppBar);
