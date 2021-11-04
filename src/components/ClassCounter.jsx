import React from 'react'

class ClassCounter extends React.Component {
    constructor(props) {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
      this.setState({count: this.state.count + 1})  
    }
    decrement() {
        this.setState({count: this.state.count - 1})  
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment.bind(this)}>Increment</button>
                <button onClick={this.decrement.bind(this)}>Decrement</button>
            </div>
        )
    }
}

export default ClassCounter