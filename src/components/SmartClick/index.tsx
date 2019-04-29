import React, { Component } from 'react';
import DumbClick from "../DumbClick"
// import { string } from 'prop-types';
// import M from "materialize-css";
import { withStyles } from '@material-ui/core/styles';
import Navbar from "../../components/Navbar";
import Grid from "@material-ui/core/Grid"
import Notification from "../Notification";

interface state {
    userScore: number,
    userMessage: string,
    clickedPics: string[],
    lost: boolean,
    highScore: number,
    picSrc: string[]
};

const styles = (theme: any) => ({
    root: {
        flexGrow: 1
    }
});

const picArea = {
    height: "50%",
    width: "40%",
    // zIndex: 10
}
const picBackgroundColor = {
    backgroundColor: `rgba(255,235,59, 0.5)`,
}

const picBackground = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/aNsrgElf0fiKBSR8cWWEL6XUTte.jpg)`,
    minHeight: "95vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // padding: "5%"
    // zIndex: -1
}

const gridAdj = {
    paddingTop: "50%",

}

class SmartClick extends Component {
    state = {
        userScore: 0,
        userMessage: "",
        clickedPics: [],
        lost: false,
        highScore: 0,
        picSrc: [
            "../../images/brooklyn99-1.jpg",
            "../../images/brooklyn99-2.jpg",
            "../../images/brooklyn99-3.jpg",
            "../../images/brooklyn99-4.jpg",
            "../../images/brooklyn99-5.jpg",
            "../../images/brooklyn99-6.jpg",
            "../../images/brooklyn99-7.jpg",
            "../../images/brooklyn99-8.jpg",
            "../../images/brooklyn99-9.jpg",
            ],
    }

    componentDidMount() {
        // M.AutoInit();
    }

    // sendToast = (text, classes, duration) => {
    //     window.Materialize.toast({html: `${text}`, classes: `${classes}`, displayLength: `${duration}`})
    // }
    shuffleArray = (array: string[]) => {
        let newArr: string[] = [];
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            // console.log(array);
            newArr = array;
        }
        return newArr
    }

    userLost = (lost: boolean) => {
        if (lost) {
            this.setState({
                userScore: 0,
                clickedPics: [],
                lost: false,
                userMessage: ""
            });
        }
    };

    arrayCheck = (arr: string[], item: string) => {
        arr.forEach(elem => {
            if (elem === item) {
                return true
            } 
        })
    }

    handleClick = (id: string):void => {
        // this.state.clickedPics.indexOf(id);
        console.log(id);
        let newScore :number = this.state.userScore + 1 
        if (this.state.clickedPics.includes(id)) {
            this.setState({
                lost: true,
                userScore: 0,
                userMessage: "You lose!" 
            }, () => {
                setTimeout(() => {
                    console.log(this.state.clickedPics);
                    this.userLost(this.state.lost);
                }, 3000)
            });
        } else {
        this.setState({
            userScore: newScore, 
            userMessage: "Great job!"
        }, () => {
            console.log(this.state.clickedPics);
           if (this.state.userScore > this.state.highScore) {this.setState({highScore: this.state.userScore})}
        });
    };
    let newPics:string[] = [] 
    newPics.push(id);
    this.setState({
        clickedPics: this.state.clickedPics.concat(newPics)
    });
}
    render() {
        let pics: string[] = this.state.picSrc
        let randomPics: string[] | undefined = this.shuffleArray(pics);
        return (
            <>
            <Navbar 
                score={this.state.userScore}
                message={this.state.userMessage}
                lost={this.state.lost}
                highScore={this.state.highScore}
                />
             <div style={picBackground}> 

            <div className="container" style={picArea}>
            <div style={gridAdj}>
            {/* <h1 style={picBackgroundColor}>Don't Click Twice...</h1> */}
            <Grid
                style={picBackgroundColor}
                container={true}
                spacing={16}
                direction={"row"}
                wrap={"wrap"}
                alignContent="center"
                alignItems="center"
                >
                {randomPics.map((elem: string, id: number) => {
                    return <DumbClick 
                    handleClick={this.handleClick} 
                    key={id.toString()}
                    src={elem} 
                    data={id.toString()}
                    />
                })}
            </Grid>
                </div>
                </div>
            </div>
        </>
        )
    }
}

export default withStyles(styles)(SmartClick);