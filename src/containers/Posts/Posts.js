import React, {Component} from 'react';

import axios from '../../axios';
import Post from '../../components/Post/Post';
import classes from './Posts.css'
import {Link} from 'react-router-dom';


class Posts extends Component {
    state = {
        posts: []
    }

    handlePostClicked(id){
        this.setState({selectedId: id});
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
                    <Link to={'/'+ post.id} key = {post.id}>
                    <Post  
                    title={post.title} 
                    author={post.author} 
                    clicked={()=>this.handlePostClicked(post.id)}/>
                    </Link>
                );
            });
        }


        return (
            
            <section className="Posts">
                   {posts}
            </section>
        );
    }
}

export default Posts;