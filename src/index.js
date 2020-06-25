import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import SearchBar from './components/searchBar';
import DisplayArea from './components/DisplayArea';

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <SearchBar />
        <DisplayArea />
      </div>
    )
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

