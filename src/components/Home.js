import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../logoImage.png'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={logoImage} alt="A leaf" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title center">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No posts yet!</div>
            )
        return (
            <div className="container home">
                <h4 className="center blue-text">Home </h4>
                <p>{postList}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home)