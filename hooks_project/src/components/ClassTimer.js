import React, { Component } from 'react'

class ClassTimer extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         timer: 0
      }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({timer: prevState.timer + 1})) 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
  render() {
    return (
      <div>
        Calss Timer - {this.state.timer}
        <button onClick={() => clearInterval(this.interval)}>Clear Timer</button>
      </div>
    )
  }
}

export default ClassTimer
