import React from 'react';

class ThreadStarter extends React.Component {
    constructor(){
        super();
        this.state = {
            text: ''
        };

        this.onChange = this.onChange.bind(this);
        this.createThread = this.createThread.bind(this);
    }
    createThread(e){
        this.props.updateMessages(this.state.text);
        this.setState({text: ''});
    }
    onChange(e) {
        this.setState({text: e.target.value});
    }
    render() {
        return (
            <div className="threadStarter">
              <textArea value={this.state.text} onChange={this.onChange}></textArea>
              <button onClick={this.createThread}>Create</button>
            </div>
        );
    }
}

const ThreadView = function(props) {
    return (
            <div className="threadView">
                {props.children}
            </div>
        );
};

class Demo extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: ['hello']
        };
        this.displayMessages = this.displayMessages.bind(this);
        this.updateMessages = this.updateMessages.bind(this);
    }
    displayMessages() {
        return this.state.messages.map((msg, i) => <ThreadView key={i}>{msg}</ThreadView>);
    }
    updateMessages(msg) {
        const newMsgs = this.state.messages.concat([msg]);
        this.setState({messages: newMsgs});
    }
    render() {
        return (
            <div>
                <ThreadStarter updateMessages={this.updateMessages}/>
                {this.displayMessages()}
            </div>
        );
    }
}

export default Demo;
