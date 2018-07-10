import React, {Component} from 'react';

import axios from '../../axios';
import Post from '../../components/Post/Post';
import classes from './Posts.css'
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';


class Posts extends Component {
    state = {
        posts: []
    }

    handlePostClicked(id){
        this.props.history.push({pathname: '/posts/' +id});
        //this.props.history.push('/' +id);
       //this.setState({selectedId: id});
    }

    componentDidMount(){
        console.log(this.props);
        
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                console.log(posts);
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: 'Bala'
                    }
                })
               this.setState({posts: updatedPost})
            } ).catch(error => {
                console.log(error)
               // this.setState({error: true})
            });
    }

    
    render(){
        let posts = <div>Some thing Went Wrong !!!</div>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                   // <Link to={'/posts'+ post.id} key = {post.id}>
                    <Post  
                    key = {post.id}
                    title={post.title} 
                    author={post.author} 
                    clicked={()=>this.handlePostClicked(post.id)}/>
                   // </Link>
                );
            });
        }


        return (
            <div>
            <section className="Posts">
                   {posts}
            </section>

            
            <Route path={this.props.match.url+'/:id' } exact component ={FullPost}/>
            
            </div>
        );
    }
}

export default Posts;