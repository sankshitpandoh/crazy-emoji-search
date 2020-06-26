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
    keyword.length >= 2 ?
    (() => {
      let items = []
      EmojiData.filter(x =>{
        x.title.includes(keyword) ?
        items.push(x)
        :
        x.keywords.includes(keyword) &&
        items.push(x)
        return null;
      })
      this.setState({
        resultItems: items
      })
    })()
    :
    keyword.length === 0 &&
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

