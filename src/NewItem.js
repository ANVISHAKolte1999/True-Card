import React, { Component } from "react";
   
import axios from 'axios';
import { withRouter } from "react-router";

class NewItem extends Component {
    state = {
        posts: []
      }
      
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
          .then(res => {
            const posts = res.data;
            this.setState({ posts });
          })
      }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          Back
        </button>
        <h3>New Item Form</h3>
        <table className="table table-bordered">
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Describe</th>
            </tr>
            {this.state.posts.map((post) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
        </table>
      </div>
    );
  }
}

export default withRouter(NewItem);
