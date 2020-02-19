import React, { Component } from 'react';
//import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from '../../containers/Blog/NewPost/NewPost';
import './Blog.css';

const AsyncNewPost = asyncComponent( () => {
    return import('../../containers/Blog/NewPost/NewPost');
});

class Blog extends Component {
   state = {
       auth: true
   }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                   to="/posts/"
                                   exact
                                   activeClassName="my-active"
                                   activeStyle={{
                                       color: '#fa923f',
                                       textDecoration: 'underLine'
                                   }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/*<Route path="/" component={Posts} />*/}
                    {/* <Redirect from="/" to="/posts" />  */}
                </Switch>
            </div>
        );
    }
}

export default Blog;