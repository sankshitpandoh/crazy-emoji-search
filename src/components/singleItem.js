import React from 'react';
import '../stylesheets/singleItem.css';

class SingleItem extends React.Component{
    state = {
        clicked: false
    }


    componentWillUnmount(){
        this.messageTimer &&
         clearTimeout(this.messageTimer)
    }

    copyEmoji = (e) => {
        let target = e.currentTarget.children[0].children[0].innerText;
        navigator.clipboard.writeText(target);
        this.setState({
            clicked: true
        }, () => {
            this.messageTimer = setTimeout(() => {
                this.setState({
                    clicked: false
                })
            }, 1000)
        })
    }

    render(){
        return(
            <div className="single-emoji-item" onClick = {this.copyEmoji}>
                <h2>
                    <span role="img" aria-label={this.props.data.title}>{this.props.data.symbol}</span>
                </h2>
                <p>{this.props.data.title}</p>
                <h3>Click to copy</h3>
                {this.state.clicked &&
                    <div className="copy-message">
                        <p>Successfully copied to Clipboard</p>
                    </div>
                }
            </div>
        )
    }
}

export default SingleItem;