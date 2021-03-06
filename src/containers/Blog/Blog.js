import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
//import NewPost from '../NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

// Component lazy loading 
const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');
});

class Blog extends Component {
 
    render () {

        return (
            <div className="Blog">
            <header> 
            <nav>
                <ul>
                    {/* activeClassName="active" is used to set custom hyper link active class */}
                    
                    <li><NavLink to="/posts" exact activeClassName="active" >Home</NavLink></li>
                    
                    <li><NavLink to={{
                        pathname: '/new-post',
                        hash: '#submit',
                        search: '?quick-submit=true'
                    }}>New Post</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
            </nav>
            </header>

                {/*<Route path="/" exact render={ () => <h1>Home</h1> } />
                <Route path="/" render={ () => <h1>Home2</h1> } />*/}
                {/* this.props.match.url is used to build relative path*/}


                {/* Switch allow to execute only one router at a time*/}
                <Switch> 
                    <Route path="/about"  exact  render={ ()=> <h2>React developer community</h2> }/>    
                    <Route path="/new-post" component ={AsyncNewPost}/>
                    <Route path="/posts"  component ={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
                <Route path="/contact"  exact  render={ ()=> <h2>1001, New Zealand</h2> }/>
                
                {/*
                <section>
                    <FullPost id = {this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
                */}
            </div>
        );
    }
}

export default Blog;