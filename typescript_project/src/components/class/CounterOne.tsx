import { Component } from "react";

type CounterState ={
    count: number
}
type Counterprops ={
    message: string
}

export class CounterOne extends Component<Counterprops, CounterState>{
    state = {
        count: 0,
    }

    hanleClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

    render() {
        return (
            <div>
                <button onClick={this.hanleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}