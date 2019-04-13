import React from 'react'

function Dashboard(props) {
  return (
    <div>
      <h2>Dashboard</h2>
      <button name="strike" onClick={props.addCount}>Strike</button>
      <button name="ball" onClick={props.addCount}>Ball</button>
      <button name="foul" onClick={props.addCount}>Foul</button>
      <button name="hit" onClick={props.addCount}>Hit</button>
    </div>
  )
}

export default Dashboard;
