import React, { Component } from 'react'
import Navbar from './layout/Navbar'
import Users from './users/Users'
import Spinner from './layout/Spinner'
import axios from 'axios'
import './App.css'

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const res = await axios.get('https://api.github.com/users')

    this.setState({ users: res.data, loading: false })

    console.log(this.state.users)
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='container'>
            <Users loading={this.state.loading} users={this.state.users} />
          </div>
        )}
      </div>
    )
  }
}

export default App
