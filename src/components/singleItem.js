import React from 'react';
import '../stylesheets/singleItem.css';

class SingleItem extends React.Component{
    render(){
        return(
            <div className="single-emoji-item">
                <h2>
                    <span role="img" aria-label={this.props.data.description}>{this.props.data.emoji}</span>
                </h2>
                <p>{this.props.data.description}</p>
            </div>
        )
    }
}

export default SingleItem;