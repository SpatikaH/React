import React from "react";

export default class TuitStats extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row mt-2">
        <div className="col">
          <span onClick={() => this.props.likeTuit(this.props.tuit)}>
                 {
                     this.props.tuit.stats && this.props.tuit.stats.likes > 0 &&
                     <i className="fa fa-thumbs-up me-1" style={{color: 'red'}}></i>
                 }
                 {
                     this.props.tuit.stats && this.props.tuit.stats.likes <= 0 &&
                     <i className="far fa-thumbs-up me-1"></i>
                 }
                 {this.props.tuit.stats && this.props.tuit.stats.likes}
          </span>
        </div>
        <div className="col">
          <span onClick={() => this.props.dislikeTuit(this.props.tuit)}>
               {
                   this.props.tuit.stats && this.props.tuit.stats.dislikes > 0 &&
                   <i className="fa fa-thumbs-down me-1" style={{color: 'blue'}}></i>
               }
               {
                   this.props.tuit.stats && this.props.tuit.stats.dislikes <= 0 &&
                   <i className="far fa-thumbs-down me-1"></i>
               }
               {this.props.tuit.stats && this.props.tuit.stats.dislikes}
           </span>
         </div>
      </div>
    );
  }
}