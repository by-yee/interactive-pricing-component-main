import React, { Component } from 'react'

class Switch extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="main__switch">
        <div className="main__switch--label">Monthly Billing</div>
        <div className="main__switch--toggle">
          <input 
            type="checkbox" 
            aria-label="price-toggle" 
            name="switch"
            id="switch" 
            checked={this.props.Switch}
            onChange={(e) => this.props.handleChange(e)}
          />
          <label htmlFor="switch"></label>
        </div>
        <div className="main__switch--label yearly">Yearly Billing</div>
      </div>
    )
  }
}
  
export default Switch