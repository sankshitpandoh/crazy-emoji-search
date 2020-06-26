import React from 'react';
import SingleItem from './singleItem';

class DisplayArea extends React.Component{

    componentDidMount(){
        this.props.searchEmoji("")
    }

    render(){
        const items = this.props.resultItems.map((x,index) => {
            return <SingleItem key={index} data = {x} />
        })
        return(
            <>
                {items}
            </>
        )
    }
}

export default DisplayArea;