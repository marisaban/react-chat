import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';

const App = React.createClass ({
//called when the component mounts 
//must return obj with initial state of the component
  getInitialState: function(){
		return {
			currentUsername: 'Bob',
			messages: [],
			userCount: 0,
		};
	},
//called by react after a comoponent mounts
//called before render
componentDidMount: function() {
	console.log('componentDidMount <App />');
	this.socket = new WebSocket('ws://localhost:3001/socketserver');
	this.socket.onopen = (event) => {
		console.log('Connected to server');
	};
	this.socket.onmessage = (event) => {
		console.log(event);
		// The socket event data is encoded as a JSON string.
		// This line turns it into an object
		const data = JSON.parse(event.data);
		switch(data.type) {
			case 'incomingMessage':
				this.incomingMessage(data);
				break;
			case 'incomingNotification':
				this.incomingNotification(data);
				break;
			case 'userCountChanged':
				this.userCountChanged(data);
				break;
			default:
				throw new Error('Unknown event type ' + data.type);
		}
	};
},
  render: function() {
		console.log('Rendering <App />');
    return (
    <div>
     <nav className="navbar">
		 <a href="/" className="navbar-brand">Chatty</a>
			 <span id="online-counter"> </span>
		 </nav>
		 <MessageList messages={this.state.messages}/>
		 <ChatBar 
       currentUsername={this.state.currentUsername}
		 />
		</div>
    );
  }
});
export default App;
