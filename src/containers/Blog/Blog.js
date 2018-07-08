import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
import {Route, NavLink, Switch} from 'react-router-dom';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';

class Blog extends Component {
 
    render () {

        return (
            <div className="Blog">
            <header> 
            <nav>
                <ul>
                    {/* activeClassName="active" is used to set custom hyper link active class */}
                    
                    <li><NavLink to="/" exact activeClassName="active" >Home</NavLink></li>
                    
                    <li><NavLink to={{
                        pathname: '/new-post',
                        hash: '#submit',
                        search: '?quick-submit=true'
                    }}>New Post</NavLink></li>

                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
            </nav>
            </header>

                {/*<Route path="/" exact render={ () => <h1>Home</h1> } />
                <Route path="/" render={ () => <h1>Home2</h1> } />*/}
                {/* this.props.match.url is used to build relative path*/}
                
                <Route path="/"  exact  component ={Posts} />
                <Route path="/new-post" component ={NewPost}/>
                <Route path="/:id" component ={FullPost}/>
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