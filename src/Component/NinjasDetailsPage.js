import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost }  from '../action/postAction'
class NinjasDetailsPage extends Component {
    deletePost = () =>{
        this.props.deletePost(this.props.posts.id);
        this.props.history.push('/Ninjas')
    }
    render() {
        console.log(this.props)
        const postInfoList = this.props.posts ? (

            <div className="card">
                <div className="card-content">
                    <span className="card-title"><b>Name:</b> {this.props.posts.name}</span>
                    <p><b>UserName:</b> {this.props.posts.username}</p>
                    <div className="center">
                        <button className="btn red" onClick={this.deletePost}>Delete Post</button>
                    </div>
                </div>
            </div>

        ):
        (
            <p className="red-text center">Loding....</p>
        )
        return (
            <div className="container">
                {postInfoList}
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    // console.log(id)
    return {
        posts: state.posts.find(posts => posts.id == id)
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NinjasDetailsPage);