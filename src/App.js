import React, { Component } from 'react';
import Story from './components/Story';



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

     <input type="search" 
     placeholder="search story" 
     onChange={ e => this.setState({ searchField: e.target.value})}/>

     {items.map(item => <Story key={item.id} item={item} items={filteredStory}  /> )}

     </div>
    );
    }


  }

}

export default App;
