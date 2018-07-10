import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {

    state = {
        loadedPost: null,
        id: null
    }


    componentWillMount(){
        console.log('inside componentWillMount')  ;
    }

    componentWillReceiveProps(){
        console.log('inside componentWillReceiveProps')  ;
    }

    componentDidMount(){
        console.log('inside componentDidUpdate')  ;   
        this.loadData();
    }

    componentDidUpdate(){
        console.log('inside componentDidUpdate')  ;   
        this.loadData();
    }

    loadData(){
        if(this.props.match.params.id){
            console.log('inside if')  ;
            const url = 'https://jsonplaceholder.typicode.com/posts/'+ this.props.match.params.id;
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                console.log(url);
                axios.get(url)
                    .then(response => {
                        this.setState({loadedPost: response.data});
                } ).catch(error => {
                    console.log(error)
                });
            }
        }
    }

    deletePostHandler = () => {
        const url = 'https://jsonplaceholder.typicode.com/posts/'+ this.props.match.params.id;    
        axios.delete(url).then(response => {
            console.log(response);
        });
    }
    
    render () {
        console.log('Full post render')  ;
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.match.params.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }


}

export default FullPost;