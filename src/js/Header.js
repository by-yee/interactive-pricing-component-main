import circle from '../images/pattern-circles.svg';

function Header() {
    return (
      <header className="header">
        <div className="header__title">
          <h1>Simple, traffic-based pricing</h1>
          <img src={circle} alt="Header Circles Pattern"/>
        </div>
        <div className="header__paragraph">
          <p>Sign-up for our 30-day trial.</p> 
          <p>No credit card required.</p>
        </div>
      </header>
    )
  }
  
  export default Header