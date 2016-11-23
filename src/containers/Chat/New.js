import React from 'react';

class NewChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: '',
      error: '',
    }
  }

  onChange = (e) => {
    this.setState({
      chat: e.target.value,
      error: '',
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.chat) {
      this.props.createChat(this.state.chat);
      this.setState({
        chat: '',
      })
    } else {
      this.setState({
        error: 'Required field',
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label style={{ color: 'red' }}>{this.state.error}</label><br/>
        <input name="chat" onChange={this.onChange} value={this.state.chat} />
        <input type="submit" label="Send" />
      </form>
    )
  }
}

export default NewChat;
