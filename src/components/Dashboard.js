import React, { Component } from "react";
import axios from "axios";
// import cData from "../chars.json";
import constants from "../constants.json";
import Character from "./Character";
import Search from "./Search";
import DashboartError from "./DashboardError";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    let charList = [];
    // charList = cData;
    this.state = {
      loading: true,
      allChars: charList,
      filteredChars: charList,
      sortAscending: true
    };
  }

  stopLoading = () => {
    console.log("stopping loading...");
    this.setState(prevState => {
      return {
        ...prevState,
        loading: false
      };
    });
  };

  componentDidMount() {
    try {
      axios.get(constants.api.CHAR_LIST).then(data => {
        console.log("call setState...");
        this.setState(
          {
            ...this.state,
            allChars: data.data.results,
            filteredChars: data.data.results
          },
          () => {
            console.log("call stopLoading...");
            this.stopLoading();
          }
        );
      });
    } catch (err) {
      console.error("Err in axios req: ", err);
      this.stopLoading();
    }
  }

  toggleSort = ev => {
    console.log("toggleSort called...");
    this.setState(
      prevState => {
        console.log("pS=", prevState);
        return {
          ...this.state,
          sortAscending: !prevState.sortAscending
        };
      },
      () => {
        this.setNewCharList(this.state.filteredChars);
      }
    );
  };
  searchChar = ev => {
    let query = ev.target.value;
    let newCharList = this.state.allChars.filter(val => {
      return !(val.name.toLowerCase().indexOf(query.trim().toLowerCase()) < 0);
    });
    console.log(query);
    console.log(newCharList);
    this.setNewCharList(newCharList);
  };
  setNewCharList = newCharList => {
    newCharList = newCharList.sort((a, b) => {
      return this.state.sortAscending ? a.id - b.id : b.id - a.id;
    });
    this.setState(prevState => {
      return {
        ...this.prevState,
        filteredChars: newCharList
      };
    });
  };

  render() {
    if (this.state.filteredChars.length === 0 && !this.state.loading) {
      return <DashboartError />;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1>R & M Show</h1>
            </div>
          </div>
          <Search
            search={{
              searchChar: this.searchChar,
              toggleSort: this.toggleSort,
              sortAscending: this.state.sortAscending
            }}
          />

          <div className="row char-cards">
            <div className="col-12">
              <div className="row">
                {this.state.filteredChars.map(char => {
                  return <Character char={char} key={char.id} />;
                })}
                {/* {this.state.filteredChars.map(char => {
                return <Character char={char} key={char.id} />;
              })} */}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Dashboard;
