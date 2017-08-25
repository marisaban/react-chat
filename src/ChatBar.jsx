import React from 'react';

const ChatBar = function (props){
    console.log('Rendering <ChatBar />');
    return (
        <footer className="chatbar">
        <input 
          className="chatbar-username"
          id="username"
          type="text"
          placeholder="Your Name (Optional"
        //   onKeyUp={props.changeName}
          defaultValue={props.currentUsername}
        />
        <input className="chatbar-message" 
          id="new-message"
          type="text"
          placeholder="Type a message and hit ENTER" 
          onKeyUp={props.addMessage}
        />
      </footer>
    );
};

export default ChatBar;