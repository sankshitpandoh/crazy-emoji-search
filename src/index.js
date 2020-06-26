import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import SearchBar from './components/searchBar';
import DisplayArea from './components/DisplayArea';
import EmojiData from './data/emojiDataBase.json';

class App extends React.Component{
  state = {
    resultItems: [],

  }

  searchEmoji = (keyword) => {
    keyword.length !== 0 ?
    (() => {
      let items = []
      EmojiData.map((x, index) => {
        x.aliases.map((y) => {
          y === keyword &&
            items.push(x);
        });
        x.tags.map((y) => {
          y === keyword &&
            items.push(x)
        }) 
      });
      this.setState({
        resultItems: items
      })
    })()
    :
    (() => {
      let extra = [...EmojiData];
      extra.splice(15,extra.length);
      this.setState({
        resultItems: extra
      })
    })()
  }

  render(){
    return(
      <div className="container">
        <SearchBar searchEmoji = {this.searchEmoji} />
        <DisplayArea searchEmoji ={this.searchEmoji} resultItems = {this.state.resultItems} />
      </div>
    )
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

