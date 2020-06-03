import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.currentUSer, this.state.value);
    this.thisState = { value: '' };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            Comment:
          <input className="form-control" ref={(input) => { this.messageBox = input; }} type="text" placeholder="enter your comment" value={this.state.value} onChange={this.handleChange} />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

