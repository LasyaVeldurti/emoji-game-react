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
  state = {clickedEmoji: [], isClicked: false}

  onClickEmoji = id => {
    const {clickedEmoji} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.propss
      return emojisList.sort(() => Math.random() - 0.5)
    }
    console.log(shuffledEmojisList)
    if (clickedEmoji.includes(id)) {
      this.setState(prevState => ({isClicked: !prevState.isClicked}))
    } else {
      this.setState(prevState => ({
        clickedEmoji: [...prevState.clickedEmoji, id],
      }))
      console.log(clickedEmoji)
    }
  }

  render() {
    const {emojisList} = this.props

    return (
      <div className="bg-container">
        <NavBar />
        <ul className="emoji-ul-container">
          {emojisList.map(eachEmoji => (
            <EmojiCard
              emojiDetails={eachEmoji}
              key={eachEmoji.id}
              clickEmoji={this.onClickEmoji}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
