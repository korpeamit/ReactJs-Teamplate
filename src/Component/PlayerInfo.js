import React, { Component } from 'react';
import axios from 'axios';
class PlayerInfo extends Component {
    state = {
        players: null
    }
    componentDidMount() {
        // console.log(this.props);
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(res => {
                this.setState({
                    players: res.data
                })
                // console.log(res)
            })
    }

    render() {
        const playerInfo = this.state.players ? (
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Name: {this.state.players.name}</span>
                        <p className="left blue-text">UserName: {this.state.players.username}</p><br />
                        <p className="left blue-text">Address: {this.state.players.address.street}</p>
                    </div>

                </div>
            </div>
        ) : (
                <h1 className="center blue-text">Loding.....</h1>
            )
        return (
            <div>
                {playerInfo}
            </div>
        )
    }
}

export default PlayerInfo;