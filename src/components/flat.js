import React from "react";
import "./flat.css";

class Flat extends React.Component {
  render() {

    const title = this.props.flats.price + this.props.flats.priceCurrency + " - " this.props.flats.name;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return(
      <div className = "flat">
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">
          {title}
        </div>
      </div>
    );
  }
}

export default Flat;
