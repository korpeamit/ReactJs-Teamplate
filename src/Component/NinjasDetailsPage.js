import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../action/postAction';

class NinjasDetailsPage extends Component {
    deletePost = () =>{
        this.props.deletePost(this.props.posts.id);
        this.props.history.push('/ninjas')
    }
    render() {
        // console.log(this.props);
        const playerInfo = this.props.posts ? (
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Name: {this.props.posts.name}</span>
                        <p className="left blue-text">UserName: {this.props.posts.username}</p><br />
                        <div className="center">
                            <button className="btn red" onClick={this.deletePost}>Delete Post</button>
                        </div>
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

const mapStateToProps = (state, ownProps) => { // step 4
    
    let id = ownProps.match.params.post_id;
    // console.log(id);
    return{
        posts: state.posts.find(posts => posts.id == id)
    }
    // return {
    //     posts : state.posts.find(post =>{
    //         return (
    //             post.id === id
    //         )
    //     })
    // }
}

const mapDispatchProps = (dispatch) =>{ //step 5
    return{
        deletePost : (id) => { dispatch(deletePost(id)) } // <== when using action folder //deletPost : (id) => { dispatch({type: 'DELETE_POST', id: id}) }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(NinjasDetailsPage);