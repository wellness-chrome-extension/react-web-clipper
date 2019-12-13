import React, {Component} from 'react';
import './App.css';
import { connect } from "react-redux";
import { getStorageInfo } from "./redux/storageInfo";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class App extends Component {
  constructor () {
    super()
    this.state = {
      formValue: '',
      storage: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){

    this.props.getStorageInfo()

  }
  handleChange(evt){
    this.setState({formValue: evt.target.value})
    console.log(this.state.formValue)
  }
  render() {
    return (

      <div className="App" id="appTabs">
        <Tabs defaultActiveKey="allItems" id="uncontrolled-tab-example">
          <Tab eventKey="allItems" title="All Items">
            <div id="title" class="title1">Saved Items</div>
            {/* <div id="itemList" class="list-group"></div> */}
            {Object.keys(this.props.storageInfo).map(key => (
              <div id="itemList" class="list-group">{this.props.storageInfo[key][0]}</div>
            )
            )}
          </Tab>
          <Tab eventKey="starred" title="Starred Items">
            <div id="starredTitle" class="title1">Starred Items</div>
            <div id="starredItems" class="list-group"></div>
            <div id='test3'></div>
          </Tab>
          <Tab eventKey="test" title="Enter Items">
            <Form id="item-form">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control id='add-item' value='ok@@' ref='hello1' onChange={(evt) => this.handleChange(evt)} placeholder="Enter new item here" />
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
  };
};

const mapStateToProps = state => {
  return {
    storageInfo: state.storageInfo,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
