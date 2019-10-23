import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Players extends Component {
    state = {
        players: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(ref => {
                this.setState({
                    players: ref.data
                })
            })
    }
    render() {
        const { players } = this.state;
        const playerList = players.length ? (
            players.map(player => {
                return (
                    <div className="player card" key={player.id}>
                        <div className="card-content">
                            <Link to={'/' + player.id}>
                                <span className="card-title">{player.name}</span>
                            </Link>
                        </div>
                    </div>
                )
            })
        ) : (
                <p>You don't have players</p>
            )
        return (
            <div className="container">
                <h1 className="center blue-text">axios</h1>
                {playerList}
            </div>
        )
    }
}

export default Players;