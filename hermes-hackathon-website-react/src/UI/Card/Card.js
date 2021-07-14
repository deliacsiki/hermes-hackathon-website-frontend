import React from "react";

// const Card = (props) => {
//   return <div>{props.name}</div>;
// };

class Card extends React.Component {
  render() {
    return <div>{this.props.name ? this.props.name : null}</div>;
  }
}

export default Card;
