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
      <div>
        {this.props.chat.list.map((chat, index) =>
          <a key={index} href={`/message/${chat.id}`} style={{display: "block"}}>
            id: {chat.id} <b>{chat.title || "unnamed"}</b>
          </a>
        )}
      </div>
    )
  }
}

export default Chat;
