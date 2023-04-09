import './index.css'

const Emoji = props => {
  const {item, changeStateValue} = props
  const {name, imageUrl} = item

  const emojiClicked = () => {
    changeStateValue()
  }

  return (
    <li className="emoji-container">
      <img onClick={emojiClicked} src={imageUrl} className="emoji" alt={name} />
      <p className="name"> {name} </p>
    </li>
  )
}

export default Emoji
