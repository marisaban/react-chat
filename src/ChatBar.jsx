import React from 'react';

const ChatBar = function (props){
    console.log('Rendering <ChatBar />');
    return (
        <footer className="chatbar">
        <input className="chatbar-username" defaultValue={props.currentUser} placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
};

export default ChatBar;