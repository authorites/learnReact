import { Component } from "react"
import { choice } from "./helper"
import Coin from './Coin'
import imgHead from'./heads.jpg'
import imgTail from './tails.jpg'


class CoinGame extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc: imgHead},
            {side: "tails", imgSrc: imgTail}
        ]
    }
    constructor(props){
        super(props)
        this.state = {
            head:0,
            tail:0,
            currCoin: null
        }
        this.flipCoin = this.flipCoin.bind(this)
    }

    flipCoin(e) {
        const newCoin = choice(this.props.coins)
        this.setState(st => {
            return {
                currCoin: newCoin,
                head: st.head + (newCoin.side === "heads"? 1 : 0),
                tail: st.tail + (newCoin.side === "tails"? 1 : 0)
            }
        })
    }

    render() {
        return (
            <div className="CoinGame">
                <h2>Let's flip a coin!</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.flipCoin}>
                    FLIP MEEE
                </button>
                <p>Out of {this.state.head + this.state.tail} flips, there have been {this.state.head} heads and {this.state.tail} tails.</p>
            </div>
        )
    }
}

export default CoinGame