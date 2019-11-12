import React, {Component} from 'react';
import './App.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'



class App extends Component {
  constructor () {
    super()
    this.state = {
      items: []
    }
  }

  render() {
    return (

      <div className="App" id="appTabs">
        <Tabs defaultActiveKey="allItems" id="uncontrolled-tab-example">
          <Tab eventKey="allItems" title="All Items">
            <div id="title" class="title1">Saved Items</div>
            <div id="itemList" class="list-group"></div>
          </Tab>
          <Tab eventKey="profile" title="Starred Items">
            <div id="starredTitle" class="title1">Starred Items</div>
            <div id="starredItems" class="list-group"></div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

{/* <div class="list-group">
<a href="#" class="list-group-item list-group-item-action"> Cras justo odio </a>
<a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
<a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
<a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
<a href="#" class="list-group-item list-group-item-action">Vestibulum at eros</a>
</div> */}

export default App;
