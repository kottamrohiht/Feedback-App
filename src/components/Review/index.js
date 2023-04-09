import './index.css'

const Review = props => {
  const {loveEmojiUrl} = props

  const paraClicked = () => {
    console.log(loveEmojiUrl)
  }

  return (
    <div className="main-container">
      <img src={loveEmojiUrl} className="loveEmojiUrl" alt="love emoji" />
      <h1 className="heading"> Thank You! </h1>
      <p className="para" onClick={paraClicked}>
        We will use feedback to improve our customer performance{' '}
      </p>
    </div>
  )
}

export default Review
