import { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        colors: ["#0d6efd", "#6610f2", "#6f42c1", "#d63384", "#dc3545", "#fd7e14",
         "#ffc107", "#198754", "#20c997", "#0dcaf0", "#adb5bd", "#000"],
         numBoxes: 20
    }
    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(() => (<Box colors={this.props.colors}/>))
        return (
            <div className="BoxContainer">
                {boxes}
            </div>
        )
    }
}

export default BoxContainer