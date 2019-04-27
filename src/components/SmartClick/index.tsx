import React, { Component } from 'react';
import DumbClick from "../DumbClick"
import { string } from 'prop-types';
// import M from "materialize-css";
import Navbar from "../../components/Navbar";
import Grid from "@material-ui/core/Grid"

export default class SmartClick extends Component {
    state = {
        userScore: 0,
        clickedPics: [],
        lost: false,
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

    // componentDidMount() {
    //     let url = "https://api.giphy.com/v1/gifs/trending?api_key=UQlAY3AHnV7hwkRT2LuYZ3yzeoCA9smT&limit=25&rating=G"
    //     fetch(url, {headers: {"access-control-allow-origin" : "*"}}).then(results => {
    //         console.log(results);
    //     let picArr = ["https://giphy.com/gifs/easter-happy-eggs-l2QZYZx0GNjGpAaPe",
    //     "https://giphy.com/gifs/easter-happy-egg-l2R00wfa8fttlpRPG",
    //     "https://giphy.com/gifs/easter-run-away-bunny-3osxYfdn1EVSoZwrMA",
    //     "https://giphy.com/gifs/simpsons-easter-egg-Qw4X3FGaZ6y9cLu1EwE",
    //     "https://giphy.com/gifs/baby-white-bunny-l3vRdNUR4XPpRoPmM",
    //     "https://giphy.com/gifs/cute-rabbit-bunny-wsJHi6a1JwoXC",
    //     "https://giphy.com/gifs/animal-pink-glitter-HiyCpSO2wE6sw",
    //     "https://giphy.com/gifs/easter-happyeaster-eastersunday-wf09aS87cdmhi",
    //     "https://giphy.com/gifs/6GNYX4kewl0e4",
    //     "https://giphy.com/gifs/the-simpsons-brain-ralph-QC9MRxmLskle8",
    //     "https://giphy.com/gifs/bird-bunny-chicken-3o7bu17yiocMFGy4es",
    //     "https://giphy.com/gifs/toferra-3o6wr91bNIPCqcyn96"];
    //         pics.data.forEach(elem => {
    //             picArr.push(elem.url);
    //         });
    //         return this.setState({
    //             allPics: [...picArr]
    //         });
    //     });
    // };

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

    handleClick = (id: never) => {
        // console.log(id);
        let idArr: string[] = [];
        idArr.push(id);
        if (this.state.clickedPics.includes(id)) {
            console.log("You clicked the same pic!")
            let message = "Uh oh! You already clicked that!"
            // this.sendToast(message, "red rounded", 3000)
            this.setState({lost: true});
        } else {
            console.log("keep winning!")
            // this.sendToast("Nice! Keep it up!", "blue rounded", 2000)
            this.setState((state) => {
                let newScore = this.state.userScore + 1 
                console.log(newScore);
                return {
                    userScore: newScore,
                    clickedPics: [ ...idArr ]
                }
            });
        };
        if (this.state.lost) {
            this.setState({
                userScore: 0,
                clickedPics: [],
                lost: false,
            });
        }
        console.log(this.state.clickedPics);
    }
    render() {
        let pics: string[] = this.state.picSrc
        let randomPics: string[] | undefined = this.shuffleArray(pics);
        return (
            <>
            <Navbar 
                score={this.state.userScore}
            />
            <Grid
            container={true}
                alignContent="center"
                alignItems="center"
            >

                {/* <Grid item className="row"> */}
                {randomPics.map((elem: string, id: number) => {
                    return <DumbClick 
                    handleClick={this.handleClick} 
                    key={id.toString()}
                    src={elem} 
                    data={id.toString()}
                    />
                })}
                {/* </Grid> */}
            </Grid>
        </>
        )
    }
}

// export default SmartClick;