import { faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './Dice.css';
type DiceProps = {
    faceValue: number,
    isRolling: boolean
}

// map face value to corresponding font awesome icon
function getIconFromFaceValue(faceValue:number) {
    return [
        faDiceOne,
        faDiceTwo,
        faDiceThree,
        faDiceFour,
        faDiceFive,
        faDiceSix
    ][faceValue - 1]
}

export default function Dice(props: DiceProps) {
    
    return (
        <div className={`Dice ${props.isRolling ? 'Dice-rolling': ''}`}>
            <FontAwesomeIcon icon={getIconFromFaceValue(props.faceValue)} size="10x"/>
        </div>
    )
}

