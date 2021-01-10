import FullPostService from './fpost-axios'
import React, { Component } from "react";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
    errorMessage: "",
  };

  componentDidUpdate() {
    console.log("Inside full post");
    if (this.props.id) {
      console.log("Loading full post for ID " + this.props.id);
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        FullPostService
          .get("/posts/" + this.props.id)
          .then((response) => {
            this.setState({ loadedPost: response.data });
          })
          .catch((error) => {
            console.log("FullPost: Error ");
            this.setState({ errorMessage: "Unable to load the data " });
          });
      }
    }
  }
  deletePostHandler() {
    console.log("FullPost : Delete post handler");

    FullPostService
      .delete("/posts/" + this.loadedPost)
      .then((response) => {
        console.log("FullPost : Delete : " + response);
      });
  }
  ;
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.errorMessage) {
      post = (
        <p style={{ textAlign: "center", color: "red" }}>
          Error loading data !
        </p>
      );
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1 className="">{this.state.loadedPost.title}</h1>

          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={() => this.deletePostHandler()}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
