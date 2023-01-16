// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timer: 0}

  componentWillUnmount = () => {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  stopTimer = () => {
    this.clearTimerInterval()
  }

  resetTimer = () => {
    this.clearTimerInterval()
    this.setState({timer: 0})
  }

  getTimer = () => {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)
    const secs = Math.floor(timer % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSecs = secs > 9 ? secs : `0${secs}`
    return `${stringifiedMinutes}:${stringifiedSecs}`
  }

  increaseTimer = () => {
    this.setState(prevState => ({timer: prevState.timer + 1}))
  }

  startTimer = () => {
    this.intervalId = setInterval(this.increaseTimer, 1000)
  }

  render() {
    return (
      <div className="bg">
        <h1>Stopwatch</h1>
        <div className="card">
          <div className="name-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="img"
            />
            <p>Timer</p>
          </div>
          <h1 className="heading">{this.getTimer()}</h1>
          <div className="button-container">
            <button className="start" onClick={this.startTimer} type="button">
              Start
            </button>
            <button className="stop" onClick={this.stopTimer} type="button">
              Stop
            </button>
            <button className="reset" onClick={this.resetTimer} type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
