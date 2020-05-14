import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export class Genres extends Component {
  state = {
    thriller: true,
    drama: true,
    comedy: true,
  };

  btnActivity = (e) => {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };
  render() {
    return (
      <div>
        <Button
          toggle
          onClick={(e) => {
            this.props.genresHandler(e);
            this.btnActivity(e);
          }}
          id="comedy"
          name="comedy"
          active={this.state.comedy ? "active" : ""}
          style={{ display: "block", width: "100px", marginTop: "10px" }}
        >
          Comedy
        </Button>
        <Button
          toggle
          onClick={(e) => {
            this.props.genresHandler(e);
            this.btnActivity(e);
          }}
          id="drama"
          active={this.state.drama ? "active" : ""}
          name="drama"
          style={{ display: "block", width: "100px", marginTop: "10px" }}
        >
          Drama
        </Button>
        <Button
          toggle
          onClick={(e) => {
            this.props.genresHandler(e);
            this.btnActivity(e);
          }}
          id="thriller"
          name="thriller"
          className={this.state.thriller ? "active" : ""}
          style={{ display: "block", width: "100px", marginTop: "10px" }}
        >
          Thriller
        </Button>
      </div>
    );
  }
}

export default Genres;
