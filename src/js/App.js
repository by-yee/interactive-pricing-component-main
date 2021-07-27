import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Content from './Content'
import Switch from './Switch'
import '../scss/style.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pageView: "100k",
      rangeSlider: "3",
      price: "16.00",
      isMonthly: true,
      switch: false
    }

    this.priceRange = { 
      1: { view: "10K", price: "8.00", discount: "6.00" }, 
      2: { view: "50K", price: "12.00", discount: "9.00" }, 
      3: { view: "100K", price: "16.00", discount: "12.00" },
      4: { view: "500K", price: "24.00", discount: "18.00" },
      5: { view: "1M", price: "36.00", discount: "27.00" } 
    }

    this.handleRange = this.handleRange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleRange(event) {
    this.setState ({
      rangeSlider: event.target.value
    }, () => { this.updateValue() })
  }

  handleChange(event) {
    const value = event.target.checked
    if(value === true) {
      this.setState ({
        switch: value,
        isMonthly: false
      }, () => { this.updateValue() })
    } else {
      this.setState ({
        switch: value,
        isMonthly: true
      }, () => { this.updateValue() })
    }
  }

  updateValue() {
    const pricing = this.state.switch === true ? "discount" : "price"
    this.setState ({
      pageView: this.priceRange[this.state.rangeSlider]["view"],
      price: this.priceRange[this.state.rangeSlider][pricing]
    })
  }

  render() {
    return (
      <div className="container container--pall">
        <Header />
        <main className="main">
          <Main 
            PageView={this.state.pageView} 
            RangeSlider={this.state.rangeSlider} 
            Price={this.state.price} 
            IsMonthly={this.state.isMonthly}
            handleRange={this.handleRange}
          />
          <Switch Switch={this.state.switch} handleChange={this.handleChange}/>
          <div className="main__divider"></div>
          <Content />
        </main>
      </div>
    );
  }
}

export default App;
