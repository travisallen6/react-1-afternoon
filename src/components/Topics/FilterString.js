import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            unFilteredArray: ["Split", "Lick", "Filter", "Fitler", "Fit Hitler","Join", "Zebra", "Jabba", "Starship", "Starcraft", "Superstar", "Warcraft",],
            filteredArray: [],
            userInput: "",
        }
    }

    updateInput(value){
        this.setState({userInput: value})
    }

    resultArray(userInput){
        let newArray = this.state.unFilteredArray.filter( val => val.toLowerCase().includes(userInput.toLowerCase()));
        this.setState({filteredArray: [...newArray]})
    }
    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={ e => this.updateInput(e.target.value)} />
                <button className='confirmationButton' onClick={ ( ) => this.resultArray(this.state.userInput) }>Filter String</button>
                <span className='resultsBox filterStringRB'> {JSON.stringify(this.state.filteredArray)} </span>
            </div>
        )
    }
}