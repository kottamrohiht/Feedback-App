import {Component} from 'react'

import Emoji from '../Emoji'
import Review from '../Review'

import './index.css'

class Feedback extends Component {
  state = {isLiked: false}

  changeStateValue = () => {
    this.setState(preVal => ({isLiked: !preVal.isLiked}))
  }

  render() {
    const {isLiked} = this.state
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    const {emojis} = resources

    return (
      <div className="app-container">
        {isLiked ? (
          <div className="inside-container">
            <Review loveEmojiUrl={loveEmojiUrl} />
          </div>
        ) : (
          <div className="inside-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance{' '}
            </h1>
            <ul className="main-emoji-container">
              {emojis.map(each => (
                <Emoji
                  item={each}
                  key={each.id}
                  changeStateValue={this.changeStateValue}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
