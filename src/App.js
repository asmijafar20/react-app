import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.js';
import { SearchBox } from './components/search-box/search-box.component.js';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      items: [],
      isLoaded: false,
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://ace.qtstage.io/api/v1/collections/entertainment?')
        .then(data => data.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json.items,
          })
      
        });

  }

  render() {
    const { isLoaded, items, searchField } = this.state;
    const filteredStory = items.filter( item => 
      item.story.headline.toLowerCase().includes(searchField.toLowerCase())
      );

    if(!isLoaded) {
      return (
        <div>is loading..</div>
      );
    }

    else {

    return(
     <div className="App"> 
     < SearchBox 
      placeholder="search story" 
      handleChange={e => this.setState({ searchField: e.target.value})}/>
     < CardList  items={filteredStory} />
     </div>
    );
    }


  }

}

export default App;
