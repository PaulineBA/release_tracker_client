import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export class Genres extends Component {
  render() {
    return (
      <div>
        <Button
          id="#comedy"
          style={{ display: "block", width: "100px", marginTop: "10px" }}
        >
          Comedy
        </Button>
        <Button
          id="#drama"
          style={{ display: "block", width: "100px", marginTop: "10px" }}
        >
          Drama
        </Button>
        <Button
          id="#thriller"
          style={{ display: "block", width: "100px", marginTop: "10px" }}
        >
          Thriller
        </Button>
      </div>
    );
  }
}

export default Genres;
