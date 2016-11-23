import React from 'react';
import { RaisedButton, TextField } from 'material-ui';

class NewMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      error: '',
    }
  }

  onChange = (e) => {
    this.setState({
      message: e.target.value,
      error: '',
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.message) {
      this.props.createMessage(this.state.message);
      this.setState({
        message: '',
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
        <TextField name="message" onChange={this.onChange} value={this.state.message} />
        <RaisedButton type="submit" label="Send" />
      </form>
    )
  }
}

export default NewMessage;
