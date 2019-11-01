import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Ninjas extends Component{
    render(){
        const { posts } = this.props;
        const cardListing = posts.map(post=>{
            return(
                <div className="card" key={post.id}>
                    <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">
                                {post.name}
                            </span>
                        </Link>
                        <p>
                            {post.username}
                        </p>
                    </div>
                </div>  
            )
        })
        return(
            <div className="container">
                {cardListing}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Ninjas);