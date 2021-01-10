import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "axios";

class Blog extends Component {
  state = {
    posts: [],
    selectedId: null,
  };
  componentDidMount() {
    axios.get("/posts").then((response) => {
      const posts = response.data.slice(0, 20);

      //Apply some modification to the data returned from server
      const transformData = posts.map((post) => {
        return {
          ...post,
          author: "swain",
        };
      });

      // Set the data to the state
      this.setState({ posts: transformData });
    });
  }

  postSelectHandler = (id) => {
    console.log("Item clicked : "+id);
    this.setState({ selectedId: id });
    console.log("Setting it to state  : "+this.state.selectedId);
  };

  simulateError(){
    axios.get("https://websitedoesnotexists.typicode.com/posts").then((response) => {

        console.log("Blog.js : error")

    });

  }

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectHandler(post.id)}
        />
      );
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedId} />
        </section>
        <section>
          <NewPost />
        </section>
        <section className="Posts">
          <button style={{ textAlign: 'center' }} onClick={()=> this.simulateError()}>Simulate error scenerio </button>
        </section>
      </div>
    );
  }
}

export default Blog;
