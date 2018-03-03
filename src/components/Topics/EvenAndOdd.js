import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    inputHandler(value){
        this.setState({userInput: value})
    }

    numberSplit(userInput){
        let array = userInput.split(",");
        let evens=[];
        let odds=[];
        for(let val in array){
            val = Number(val);
            if(val %2 === 0 && val !==0){
                evens.push(val);
            } else if(val %2 === 1) {
                odds.push(val);
            }
        }
        this.setState( {evenArray: evens, oddArray: odds} );
    }

    
    
    
    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input  className="inputLine" onChange={ e => this.inputHandler(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.numberSplit(this.state.userInput)}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)} </span>
                
            </div>

        )
    }

}