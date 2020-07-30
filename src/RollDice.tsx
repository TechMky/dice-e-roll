import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.css'

type RollDiceProps ={

}

type RollDiceState = {
    firstDiceValue: number
    secondDiceValue: number
    isRolling: boolean
}

function getRandomFaceValue() {
    return Math.floor(Math.random() * 6) + 1
}
export default class RollDice extends Component<RollDiceProps, RollDiceState> {

    state: RollDiceState = {
        firstDiceValue: getRandomFaceValue(),
        secondDiceValue: getRandomFaceValue(),
        isRolling: false
    }

    handleRollDice = (e: React.MouseEvent) => {
        this.setState({
            firstDiceValue: getRandomFaceValue(),
            secondDiceValue: getRandomFaceValue(),
            isRolling: true
        })

        setTimeout(() => {
            this.setState({ isRolling: false })
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
                
            </div>
        )
    }
}
