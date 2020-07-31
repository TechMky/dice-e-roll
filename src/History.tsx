import React from 'react'
import { HistoryType } from './RollDice'
import ReactTimeAgo from 'react-time-ago'
import './History.css'

type History = {
    history: HistoryType
}

export default function History(props: History) {
    console.log(props)
    return (
        <div className="History">
            <h3 style={{textAlign: "center"}}>Past Moves</h3>
            <ul>
            { 
                props.history.map( (history, index) => (
                    <li key={index} className="History-item">
                        <div className="History-outcome">
                            <span>Outcome:</span>
                            
                            <span> {history.dice1} + {history.dice2}, <span className="History-total"> {history.dice1 + history.dice2} </span></span>
                            
                        </div>
                        {/* <small>{history.dateTime.toDateString()}</small>         */}
                        <ReactTimeAgo date={history.dateTime} />
                    </li>
                ))
            }
            </ul>
        </div>
    )
}
