import React, { Component } from 'react';

import './NewPost.css';
import axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'ssantosh'
    }

    addNewPostHandler(){
        console.log("NewPost:: inside the handler");
        const data = {
            title: this.state.title,
            content:this.state.content,
            author:this.state.author
        };
        axios.post('https://jsonplaceholder.typicode.com/posts/',data).then(response=>{
        console.log(response);

        });

    }
    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="ssantosh">Santosh SWain</option>
                    <option value="ssamarth">Siyona Swain</option>
                    <option value="ssiyona">Siyona Swain</option>
                </select>
                <button onClick ={()=> this.addNewPostHandler()} >Add Post</button>
            </div>
        );
    }
}

export default NewPost;