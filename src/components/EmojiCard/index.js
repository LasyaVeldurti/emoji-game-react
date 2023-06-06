// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails
  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-li-container">
      <button onClick={onClickEmoji} className="emoji-btn" type="button">
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
