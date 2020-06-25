import React from 'react';
import Data from '../data/emojiDataBase.json';

class DisplayArea extends React.Component{
    render(){
    console.log(Data.length)
    console.log(Data)
        return(
            <h1>hey</h1>
        )
    }
}

export default DisplayArea;