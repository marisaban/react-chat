import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
//set the initial state 
//React will call the functions in the following order when it mounts
// the component
// constructor
// componentWillMount (not used in this component)
// componentDidMount
	constructor(props){
		super(props);
		this.state = {
			currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
			messages: [
			{
			  username: "Bob",
			  content: "Has anyone seen my marbles?",
			},
			{
			  username: "Anonymous",
			  content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
			}
			]
		}
	}
  render() {
    return (
      <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
        <MessageList />
        <ChatBar />
      </div>
    );
  }
}
export default App;
