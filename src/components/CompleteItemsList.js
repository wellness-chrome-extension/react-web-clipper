import React, { Component } from "react";
import "../App.css";
import SingleItem from "./SingleItem"
import { connect } from "react-redux";


class CompleteItemsList extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
        {Object.keys(this.props.storageInfo).filter(key => this.props.storageInfo[key][0])
        .map(key => {
        //   <div className="Item-container">
        //     <div class="List-item-container">
        //       <div id={key} class="List-item">
        //         {this.props.storageInfo[key][0]}
        //       </div>
        //     </div>
        //   </div>
            return(
              <SingleItem itemInfo={this.props.storageInfo[key]} />
            )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    storageInfo: state.storageInfo
  };
};

export default connect(mapStateToProps)(CompleteItemsList);