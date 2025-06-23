import React, { Component } from 'react'
import axios from 'axios'

class GetList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMsg: ''
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })
    }
    
  render() {
    const {posts, errorMsg} = this.state
    return (
      <div style={{textAlign: 'left',paddingLeft: '20px'}}>
        <p>Get List</p>
        {
            posts.length ?
            posts.map(post => <div key={post.id}><h4>{post.id}) : Title : {post.title}</h4><h6>Body : {post.body}</h6><br></br></div>) :
            null
        }
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    )
  }
}

export default GetList
