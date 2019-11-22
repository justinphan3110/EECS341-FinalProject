import React, { Component } from 'react'
import Content from './components/Content'
import Header from './components/Header'
import Navigator from './components/Navigator'
import Paperbase from './components/Paperbase'

export default class App extends Component {
  render() {
    return (
      <div>
        <Paperbase />
      </div>
    )
  }
}
