import icon from '../images/icon-check.svg';

function Content() {
  return (
    <div className="main__content">
      <div className="main__benefit">
        <div className="main__benefit--item">
          <img src={icon} alt="Icon Check"/>
          <div className="main__benefit--label">Unlimited websites</div>
        </div>
        <div className="main__benefit--item">
          <img src={icon} alt="Icon Check"/>
          <div className="main__benefit--label">100% data ownership</div>
        </div>
        <div className="main__benefit--item">
          <img src={icon} alt="Icon Check"/>
          <div className="main__benefit--label">Email reports</div>
        </div>
      </div>
      <div className="main__cta">
        <a href="#">Start my trial</a>
      </div>
    </div>
  )
}

export default Content