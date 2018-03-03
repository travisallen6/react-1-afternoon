import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super()
        this.state={
            unFilteredArray: [
                {
                    name: "Batman",
                    clothes: "Spandex",
                    cape: true,
                    dc: true,
                }, {
                    name: "Daredevil",
                    status: "blind",
                    marvel: true,
                }, {
                    name: "Aquaman",
                    status: "lame",
                    powers: "talks to fish",
                    nationality: "Atlantian",
                    dc: true,
                    clothes: "seaweed"
                }, {
                    name: "Spiderman",
                    cape: false,
                    powers: "sticky hands",
                    marvel: true,
                }             
            ],
            userInput: '',
            filteredArray: [],
        }
    }

    getInput(val){
        this.setState({userInput: val})
    }

    filterArray(input){
        this.setState({

            filteredArray: this.state.unFilteredArray.filter( (val) => val[this.state.userInput])
            
        }) 
        
          
    }




    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'></span>
                <input className='inputLine' onChange= { e => this.getInput(e.target.value)} />
                <button className='confirmationButton' onClick={ ( ) => this.filterArray(this.state.userInput) }>Filter</button>
                <span className='resultsBox filterStringRB'></span>
            </div>
        )
    
   }
}
