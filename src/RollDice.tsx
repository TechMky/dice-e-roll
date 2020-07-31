import React, { Component } from 'react'
import Dice from './Dice'
import History from './History'
import './RollDice.css'

type RollDiceProps ={

}

export type HistoryType = Array<{
    dice1: number
    dice2: number
    dateTime: Date
}>

type RollDiceState = {
    firstDiceValue: number
    secondDiceValue: number
    isRolling: boolean
    history: HistoryType 
}

function getRandomFaceValue() {
    return Math.floor(Math.random() * 6) + 1
}
export default class RollDice extends Component<RollDiceProps, RollDiceState> {

    state: RollDiceState = {
        firstDiceValue: getRandomFaceValue(),
        secondDiceValue: getRandomFaceValue(),
        isRolling: false,
        history: []
    }

    handleRollDice = (e: React.MouseEvent) => {
        this.setState({
            firstDiceValue: getRandomFaceValue(),
            secondDiceValue: getRandomFaceValue(),
            isRolling: true
        })

        setTimeout(() => {
            this.setState( (prevState) => ({
                isRolling: false,
                history: [ { dice1: prevState.firstDiceValue, dice2: prevState.secondDiceValue, dateTime: new Date() } , ...prevState.history]
            }) )
        }, 1000);
    }

    render() {
        return (
            <div className="RollDice">
                <div className='RollDice-dice-container'>
                    <Dice faceValue={this.state.firstDiceValue} isRolling={this.state.isRolling} />
                    <Dice faceValue={this.state.secondDiceValue} isRolling={this.state.isRolling} />    
                </div>
                
                <button className="RollDice-button" disabled={this.state.isRolling} onClick={this.handleRollDice}>
                    { this.state.isRolling ? "Rolling..." : "Roll Dice" }
                </button>
                <History history={this.state.history}/>
            </div>
        )
    }
}
