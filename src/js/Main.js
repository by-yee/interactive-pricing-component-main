import React, { Component } from 'react'

class Main extends Component {
  constructor(props) {
    super()
  }

  render() {
    return(
      <div className="main__flex">
        <div className="main__pageview">
          <span className="page_view" id="page-view">{this.props.PageView}</span> Pageviews
        </div>

        <div className="main__range">
          <input 
            type="range" 
            aria-label="Price Range" 
            className="main__range--slider" 
            name="rangeSlider"
            id="rangeSlider" 
            min="1" 
            max="5" 
            value={this.props.RangeSlider}
            onChange={(e) => this.props.handleRange(e)}
          />
        </div>

        <div className="main__price">
          <span className={`pricing ${this.props.IsMonthly ? "monthly_price" : "yearly_price"}`} id="pricing">${this.props.Price}</span> / month
        </div>
      </div>
    )
  }
}

export default Main
