/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import './index.css'

// Write your code here.
class EmojiGame extends Component {
  state = {
    clickedEmoji: [],
    isClicked: false,
    score: 0,
    topScore: 0,
    gameOver: false,
    status: '',
  }

  onClickEmoji = id => {
    console.log(id)
    let {emojisList} = this.props
    const {isClicked, score} = this.state
    const {length} = emojisList.length
    const {clickedEmoji} = this.state

    if (clickedEmoji.includes(id) === false) {
      this.setState(prevState => ({
        clickedEmoji: [...prevState.clickedEmoji, id],
        score: prevState.score + 1,
      }))
    }

    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    emojisList = shuffledEmojisList

    if (clickedEmoji.includes(id)) {
      this.setState(prevState => ({isClicked: !prevState.isClicked}))
    }
    console.log(clickedEmoji)

    if (isClicked) {
      this.setState(prevState => ({gameOver: !prevState.gameOver}))
      this.setState({status: 'Lose'})
    }
    if (score === length) {
      this.setState(prevState => ({gameOver: !prevState.gameOver}))
      this.setState({status: 'Win'})
    }
  }

  onClickPlayAgain = () => {
    const {score, topScore} = this.state
    if (topScore < score) {
      this.setState({topScore: score})
    }
    this.setState({score: 0})
    this.setState(prevState => ({gameOver: !prevState.gameOver}))
  }

  render() {
    const {emojisList} = this.props
    const {gameOver, status, score, topScore} = this.state
    let landingPage
    if (status === 'win') {
      landingPage = (
        <div className="landing-page-container">
          <div className="text-container">
            <h1>You Won</h1>
            <p>Best Score</p>
            <p>
              {score}/{emojisList.length}
            </p>
            <button
              onClick={this.onClickPlayAgain}
              className="play-again-btn"
              type="button"
            >
              Play Again
            </button>
          </div>
          <img
            className="landing-img"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win"
          />
        </div>
      )
    } else {
      landingPage = (
        <div className="landing-page-container">
          <div className="text-container">
            <h1>You Lose</h1>
            <p> Score</p>
            <p>
              {' '}
              {score}/{emojisList.length}{' '}
            </p>
            <button
              onClick={this.onClickPlayAgain}
              className="play-again-btn"
              type="button"
            >
              Play Again
            </button>
          </div>
          <img
            className="landing-img"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="lose"
          />
        </div>
      )
    }

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} />
        {gameOver ? (
          <>{landingPage}</>
        ) : (
          <>
            <ul className="emoji-ul-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  clickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default EmojiGame
