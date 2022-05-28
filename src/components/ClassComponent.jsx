import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
      super(props)
    
      
    }
  render() {
    return (
        <div>ClassComponent {this.props.name}</div>
    )
  }
}

export default ClassComponent