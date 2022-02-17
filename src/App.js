import { Component } from 'react';
import Searchbar from './components/Searchbar';

import './App.css';

export default class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = query => {
    this.setState({ imageName: query });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
