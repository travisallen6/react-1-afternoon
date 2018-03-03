import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    updateInput(input){
        this.setState({userInput: input})
    }

    checkPalindrome(input){
        let reversedString = input.split(" ").join("").split("").reverse().join("").toLowerCase();
        if(input.split(" ").join("").toLowerCase()===reversedString){
            this.setState({palindrome: 'True'})
        } else {
            this.setState({palindrome: 'False'})
        }
    }


    render(){
        return (
            <div className='puzzleBox filterString PB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={ (e) => this.updateInput(e.target.value) }/>
                <button className='confirmationButton' onClick={ ( ) => this.checkPalindrome(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}