import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Ninjas extends Component {

    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="player card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.name}</span>
                            </Link>
                        </div>
                    </div>
                )
            })
        ) : (
                <p className="center red-text">You don't have posts</p>
            )
        return (
            <div className="container">
                <h1 className="center blue-text">Redux</h1>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{  //step 4
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Ninjas);