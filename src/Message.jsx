import React from 'react';

const Message = React.createClass({
    render: function(){
        console.log('Render <Message />');
        return (
            <div className="message">
            	<span className="username">{this.props.message.username}</span>
            	<span className="content">{this.props.message.content}</span>
            </div>
        );
    }
});

export default Message;

