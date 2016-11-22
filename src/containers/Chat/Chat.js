import React from 'react';

class Chat extends React.Component {
  componentDidMount() {
    this.props.getChat();
  }

  render() {
    if (this.props.chat.loading) {
      return (
        <h2>loading...</h2>
      );
    }

    if (this.props.chat.error) {
      return (
        <h2>{this.props.chat.error}</h2>
      );
    }

    if (!this.props.chat.list.length) {
      return (
        <h2>No data</h2>
      )
    }

    return (
      <ul>
        {this.props.chat.list.map(chat =>
          <li>
            id: {chat.id} <b>{chat.title}</b>
          </li>
        )}
      </ul>
    )
  }
}

export default Chat;
