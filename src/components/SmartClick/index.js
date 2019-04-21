import React, { Component } from 'react';
import DumbClick from "../DumbClick"
// import pics from "../../components/pics"
// import { Module } from 'module';



class SmartClick extends Component {
    state = {
        userScore: 0,
        clickedPics: [],
        allPics: []
    }

    componentDidMount() {
        // let url = "https://api.giphy.com/v1/gifs/trending?api_key=UQlAY3AHnV7hwkRT2LuYZ3yzeoCA9smT&limit=25&rating=G"
        // fetch(url, {headers: {"access-control-allow-origin" : "*"}}).then(results => {
        //     console.log(results);
        let picArr = ["https://giphy.com/gifs/easter-happy-eggs-l2QZYZx0GNjGpAaPe",
        "https://giphy.com/gifs/easter-happy-egg-l2R00wfa8fttlpRPG",
        "https://giphy.com/gifs/easter-run-away-bunny-3osxYfdn1EVSoZwrMA",
        "https://giphy.com/gifs/simpsons-easter-egg-Qw4X3FGaZ6y9cLu1EwE",
        "https://giphy.com/gifs/baby-white-bunny-l3vRdNUR4XPpRoPmM",
        "https://giphy.com/gifs/cute-rabbit-bunny-wsJHi6a1JwoXC",
        "https://giphy.com/gifs/animal-pink-glitter-HiyCpSO2wE6sw",
        "https://giphy.com/gifs/easter-happyeaster-eastersunday-wf09aS87cdmhi",
        "https://giphy.com/gifs/6GNYX4kewl0e4",
        "https://giphy.com/gifs/the-simpsons-brain-ralph-QC9MRxmLskle8",
        "https://giphy.com/gifs/bird-bunny-chicken-3o7bu17yiocMFGy4es",
        "https://giphy.com/gifs/toferra-3o6wr91bNIPCqcyn96"];
            // pics.data.forEach(elem => {
            //     picArr.push(elem.url);
            // });
            return this.setState({
                allPics: [...picArr]
            });
        // });
    };

    handleClick = (url) => {
        console.log(url);
        this.setState((state) => {
            let newScore = this.state.userScore + 1 
            console.log(newScore);
            return {
                userScore: newScore,
                // clickedPics: this.state.clickedPics.push(url)
            }
        });
    }
    render() {
        console.log(this.state.allPics)

        return ( Object.values(this.state.allPics).map(elem => {
            // console.log(elem);
            return  (
                <div className ="row">
                    <DumbClick handleClick={this.handleClick} url={elem} />
                </div>
            );
        })
        )
    }
}

export default SmartClick;