import React from 'react';
import NewMessage from './New';

class Message extends React.Component {
  componentDidMount() {
    if (this.props.chatId) {
      this.props.getMessage(this.props.chatId);
    }
  }

  createMessage = (message) => {
    this.props.createMessage(this.props.chatId, message);
  }

  renderList() {
    if (this.props.message.loading) {
      return (
        <h2>loading...</h2>
      );
    }

    if (this.props.message.error) {
      return (
        <h2>{this.props.message.error}</h2>
      );
    }

    if (!this.props.message.list.length) {
      return (
        <h2>No data</h2>
      );
    }

    return (
      <div>
        {this.props.message.list.map((message, index) =>
          <div key={index}>
            id: {message.id} <b>{message.message || 'unknown'}</b>
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>{`Message ${this.props.chatId || 'unknown'}`}</h2>

        {this.renderList()}

        <NewMessage createMessage={this.createMessage} />
      </div>
    )
  }
}

export default Message;
