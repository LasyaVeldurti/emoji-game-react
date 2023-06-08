// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="title">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className="title">Score: {score} </p>
        <p className="title">Top Score : {topScore} </p>
      </div>
    </div>
  )
}
export default NavBar
