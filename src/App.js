import React from 'react';
import Page from './components/page.js'
import './styles/page.css'



class App extends React.Component {
  state = {
    dates:
      [{"venue": "Boxcar Social", "date": "April 1"}]
  }
  
  constructor(props){
    super(props)
  }
  
  render(){
    console.log(this.state.dates)
    return (
      <Page dates={this.state.dates}></Page>
    );
  }
}

export default App;
