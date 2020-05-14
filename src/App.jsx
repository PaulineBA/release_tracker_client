import React, { Component } from "react";
import axios from "axios";
import Search from "./components/Search";
import Genres from "./components/Genres";

export class App extends Component {
  state = {
    searchText: "",
    searchResult: [],
    message: "",
    genresSelected: ["thriller", "drama", "comedy"],
  };

  searchHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  searchReq = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/v1/search", {
        params: {
          searchText: this.state.searchText,
          genres: this.state.genresSelected,
        },
      });
      response.data.message !== "" &&
        this.setState({ message: response.data.message });
      this.setState({ searchResult: response.data.result });
    } catch (error) {
      this.setState({ message: error });
    }
  };

  genresHandler = (e) => {
    let selectedGenre = e.target.name;
    if (this.state.genresSelected.includes(selectedGenre)) {
      this.setState({
        genresSelected: this.state.genresSelected.filter(
          (element) => element !== selectedGenre
        ),
      });
    } else {
      this.setState({
        genresSelected: [...this.state.genresSelected, selectedGenre],
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Release Tracker</h1>
        <p id="message">{this.state.message}</p>
        <Search
          searchResult={this.state.searchResult}
          searchHandler={this.searchHandler}
          searchReq={this.searchReq}
        />
        <p>
          <Genres genresHandler={this.genresHandler} />
          Powered by
          <img
            style={{ width: "150px" }}
            src={require("./images/apilogo.svg")}
          />
        </p>
      </div>
    );
  }
}

export default App;
