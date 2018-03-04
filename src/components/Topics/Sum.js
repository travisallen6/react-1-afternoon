import React, { Component } from 'react';

export default class Sum extends Component {
    constructor(){
        super();
        
            this.state = {
            firstNumber: 0,
            secondNumber: 0,
            sum: 0,
        }
    }

    updateFirstNumber(input){
        this.setState({firstNumber: input})
    }

    updateSecondNumber(input){
        this.setState({secondNumber: input})
    }

    getSum(first, second){
        let total = Number(first) + Number(second);
        this.setState({sum: total})
    }



    render(){
        return(
            <div className="puzzleBox sumPB">
                <h1>Sum</h1>
                <input className='inputLine' onChange={ (e) => this.updateFirstNumber(e.target.value) }/>
                <input className='inputLine' onChange={ (e) => this.updateSecondNumber(e.target.value)}/>
                <button className='confirmationButton' onClick={ () => this.getSum(this.state.firstNumber, this.state.secondNumber) }>Calculate</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}
