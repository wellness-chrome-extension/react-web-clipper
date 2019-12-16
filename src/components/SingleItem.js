import React, { Component } from "react";
// import "../App.css";
import { connect } from "react-redux";
import { getStorageInfo } from "../redux/storageInfo";
import { setStarredItem } from "../redux/storageInfo";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"

class SingleItem extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
    this.starClick = this.starClick.bind(this)
  }

  starClick() {
    console.log('here in starclick')
    this.props.setStarredItem(this.props.itemInfo)
    console.log('star key', this.props.itemInfo.key)
    this.props.getStorageInfo()
  }

  render() {
    console.log('iteminfo!hey!', this.props.itemInfo)
    console.log('key', this.props.itemInfo.key)

    return (
      <ListGroup>
        <ListGroup.Item className="List-container">
          <span className="List-group-item">{this.props.itemInfo.info}</span>
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-primary" className="expand-button">
              <span role="img" aria-label="expand">
                ⬇️
              </span> 
            </Button>
            <Button variant={this.props.itemInfo.starred ? "primary" : "outline-primary"} className="star-button" onClick={() => this.starClick()}>
              <span role="img" aria-label="star">
                ⭐
              </span> 
            </Button>
            <Button variant="outline-primary" className="delete-button">
              <span role="img" aria-label="cross">
                ❌
              </span>
            </Button>
          </ButtonGroup>
        </ListGroup.Item>
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
    setStarredItem: (itemKey) => dispatch(setStarredItem(itemKey))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleItem);
