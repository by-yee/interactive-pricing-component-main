import React, { Component } from 'react'

class Main extends Component {
  constructor(props) {
    super()
    this.progress = { 
      1: { percent: "0%" }, 
      2: { percent: "25%" }, 
      3: { percent: "50%" },
      4: { percent: "75%" },
      5: { percent: "100%" } 
    }
  }

  render() {
    //Slider progress bar for Chrome browser
    const percent = this.progress[this.props.RangeSlider]["percent"]
    const sliderProgress = {
      backgroundImage: `-webkit-gradient(linear, left top, right top, color-stop(${percent}, hsl(174, 77%, 80%)), color-stop(${percent}, hsl(224, 65%, 95%)))`
    };

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
            style={sliderProgress}
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
