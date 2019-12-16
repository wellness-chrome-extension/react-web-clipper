import React, {Component} from 'react';
import CompleteItemsList from './CompleteItemsList'
// import '../App.css';
import { connect } from "react-redux";
import { getStorageInfo } from "../redux/storageInfo";
import { setStorageConfig } from "../redux/storageInfo";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class App extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  componentDidMount(){
    this.props.setStorageConfig()
    this.props.getStorageInfo()
  }

  render() {
    return (
      <div className="App" id="appTabs">
        <Tabs defaultActiveKey="allItems" id="uncontrolled-tab-example">
          <Tab eventKey="allItems" title="All Items">
            <div id="title" class="title1">Saved Items</div>

            {/* <div id="itemList" class="list-group"></div> */}
          <CompleteItemsList />
          </Tab>
          <Tab eventKey="starred" title="Starred Items">
            <div id="starredTitle" class="title1">Starred Items</div>
            <div id="starredItems" class="list-group"></div>
            <div id='test3'></div>
          </Tab>
          <Tab eventKey="test" title="Enter Items">
            <Form id="item-form">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control id='add-item' placeholder="Enter new item here" />
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Form>
            <p id="log"></p>
          </Tab>
        </Tabs>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getStorageInfo: () => dispatch(getStorageInfo()),
    setStorageConfig: () => dispatch(setStorageConfig())
  };
};

// const mapStateToProps = state => {
//   return {
//     storageInfo: state.storageInfo,
//   };
// };

export default connect(
  null,
  mapDispatchToProps
)(App);
