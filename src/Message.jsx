import React from 'react';

const Message = React.createClass({
    render: function(){
        console.log('Render <Message />');
        return (
            <div className="message">
            	<span className="username"> </span>
            	<span className="content"> </span>
            </div>
        );
    }
});

export default Message;