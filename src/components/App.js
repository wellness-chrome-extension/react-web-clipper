import React, {Component} from 'react';
import CompleteItemsList from './CompleteItemsList'
import StarredItemsList from './StarredItemsList'

// import '../App.css';
import { connect } from "react-redux";
import { getStorageInfo } from "../redux/storageInfo";
import { setStorageConfig } from "../redux/storageInfo";
import { addItem } from "../redux/storageInfo";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



class App extends Component {
  constructor () {
    super()
    this.state = {
      enteredItem: '',
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.enteredItemHandleChange = this.enteredItemHandleChange.bind(this)
  }

  componentDidMount(){
    this.props.setStorageConfig()
    this.props.getStorageInfo()
  }

  enteredItemHandleChange(evt){
    this.setState({enteredItem: evt.target.value});
  }

  handleSubmit(evt){
    evt.preventDefault()
    this.props.addItem(this.state.enteredItem)
    this.props.getStorageInfo()
    this.setState({
      submitted: true
    })
    setTimeout(() => { this.setState({submitted: false}) }, 3000);
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
            <StarredItemsList />
          </Tab>
          <Tab eventKey="test" title="Enter Items">
            <Form className="submit-item" id="item-form" onSubmit={(evt) => this.handleSubmit(evt)}>
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control id='add-item' placeholder="Enter new item here" value={this.state.enteredItem} onChange={(evt) => this.enteredItemHandleChange(evt)} />
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Form>
            {this.state.submitted ? <div className="submit-item">New item submitted!</div> : <div />}
          </Tab>
        </Tabs>

      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getStorageInfo: () => dispatch(getStorageInfo()),
    setStorageConfig: () => dispatch(setStorageConfig()),
    addItem: (itemInfo) => dispatch(addItem(itemInfo))
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
