import { Component } from 'react'
import { choice } from './helper'
import './Box.css'


class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color : choice(this.props.colors)
        }
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    randomColor() {
        let newColor
        do {
            newColor = choice(this.props.colors)
        } while (newColor === this.state.color)
        this.setState({color: newColor})
    }

    handleOnClick(e) {
        this.randomColor()
    }

    render() {
        return (
            <div className="Box" 
                style={{backgroundColor: this.state.color}} 
                onClick={this.handleOnClick}>
            </div>
        )
    }
}

export default Box