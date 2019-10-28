import React, {Component} from 'react';
import './App.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'



class App extends Component {

  render() {
    return (
      <div className="App">
        <Tabs defaultActiveKey="allItems" id="uncontrolled-tab-example">
          <Tab eventKey="allItems" title="All Items">
            <div id="title">Saved Items</div>
            <div id="itemList"></div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <div>This is Tab 2</div>
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            <div>This is Tab 3</div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
