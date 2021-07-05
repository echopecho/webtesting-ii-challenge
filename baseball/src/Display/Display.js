import React from 'react'

function Display(props) {
  return (
    <div>
      <h2>Display</h2>
      <p>Balls: {props.count.ball}</p>
      <p>Strikes: {props.count.strike}</p>
    </div>
  )
}

export default Display;