import React, { Component } from "react";

// import "../App.css";
import { connect } from "react-redux";
import { getStorageInfo } from "../redux/storageInfo";
import { setStarredItem } from "../redux/storageInfo";
import { removeItem } from "../redux/storageInfo";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class SingleItem extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
    this.starClick = this.starClick.bind(this);
    this.removeClick = this.removeClick.bind(this);
    this.expandHandleClick = this.expandHandleClick.bind(this);
  }

  starClick() {
    this.props.setStarredItem(this.props.itemInfo);
    this.props.getStorageInfo();
  }

  removeClick() {
    this.props.removeItem(this.props.itemInfo);
    this.props.getStorageInfo();
  }

  expandHandleClick() {
    if (this.state.expanded) {
      this.setState({expanded: false})
    }
    else{
      this.setState({expanded: true})
    }
  }


  render() {
    let urlValues = ["page", "link", "image", "audio"];
    let linkCondition = urlValues.includes(this.props.itemInfo.context);
    let expandedClass = this.state.expanded ? "Expanded-list-group-item" : "List-group-item"

    return (
      <ListGroup>
        <ListGroup.Item className="List-container">
          {linkCondition ? (
            <span className={expandedClass}>
              <a href={this.props.itemInfo.info}>
                {this.props.itemInfo.info}
              </a>
            </span>
          ) : (
            <span className={expandedClass}>
              {this.props.itemInfo.info}
            </span>
          )}
          <ButtonGroup className="Button-group" aria-label="Basic example">
            <Button variant="outline-primary" className="expand-button" onClick={() => this.expandHandleClick()}>
              {this.state.expanded ? 
              <span role="img" aria-label="expand">
                ⬆️
              </span>
              :
              <span role="img" aria-label="expand">
                ⬇️
              </span>}
            </Button>
            <Button
              variant={
                this.props.itemInfo.starred ? "primary" : "outline-primary"
              }
              className="star-button"
              onClick={() => this.starClick()}
            >
              <span role="img" aria-label="star">
                ⭐
              </span>
            </Button>
            {this.props.itemInfo.starred ?
            <Button
              variant="outline-primary"
              className="delete-button"
              onClick={() => this.removeClick()}
              disabled
            >
              <span role="img" aria-label="cross">
                ❌
              </span>
            </Button>
            :
            <Button
              variant="outline-primary"
              className="delete-button"
              onClick={() => this.removeClick()}
            >
              <span role="img" aria-label="cross">
                ❌
              </span>
            </Button>}
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
    setStarredItem: itemInfo => dispatch(setStarredItem(itemInfo)),
    removeItem: itemInfo => dispatch(removeItem(itemInfo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleItem);
