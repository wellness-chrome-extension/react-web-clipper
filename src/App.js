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
          <Tab eventKey="starred" title="Starred Items">
            <div id="starredTitle" class="title1">Starred Items</div>
            <div id="starredItems" class="list-group"></div>
            <div id='test3'></div>
          </Tab>
          <Tab eventKey="test" title="Enter Items">
            <div id="test1" class="title1">Enter a new item below</div>
            <form id="item-form">
              <label>
                <input type="text" name="name" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </Tab>
        </Tabs>
        <script src="../public/app/script.js"></script>
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
