import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { getStorageInfo } from "../redux/storageInfo";
import ListGroup from 'react-bootstrap/ListGroup'


class SingleItem extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
        <ListGroup>
            <ListGroup.Item className="List-group-item">{this.props.itemInfo[0]}</ListGroup.Item>
        </ListGroup>
    );
  }
}

const mapStateToProps = state => {
  return {
    storageInfo: state.storageInfo
  };
};

const mapDispatchToProps = dispatch => {
    return {
        getStorageInfo: () => dispatch(getStorageInfo()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
