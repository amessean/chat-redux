import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import Message from './message';
import { fetchMessages } from '../actions';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages();
  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title" />
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {this.props.messages.map((message, index) => {
            return <Message key={index} message={message} />;
          })}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
