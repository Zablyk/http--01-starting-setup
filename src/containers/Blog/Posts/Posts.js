import React, { Component } from 'react';
import axios from '../../../Axios';

import Post from '../../../components/Post/Post';
import './Posts.css';


class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'OLEG'
                    }
                });
                this.setState({posts: updatePosts});
                //console.log(response);
            })
                .catch(error => {
                    console.log(error);
                    //this.setState({error: true});
                });
    }

    postSelectedHandler (id) {
        this.props.history.push({pathname: '/' + id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    //<Link to={'/' + post.id} >
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked= {() => this.postSelectedHandler(post.id)} />
                    //</Link>
                    );
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;