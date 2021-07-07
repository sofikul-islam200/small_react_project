import React, { Component } from "react";
import { Categorylist } from "./CategoryList";
class Header extends React.Component {
   state = {
       searchTerm:""
   }

  //this is handle change function 

  handleChange = (e) =>{
    this.setState({
       searchTerm:e.target.value
    })
  }

  //this is handle keypress function 

  handleKeyPress =  () =>{
     //code will be write letter 
     console.log('hello')
  }



  render() {
    const { singleCategory } = this.props;
    return (
      <div>
        <h3 style={{ textAlign: "center", marginTop: -0 }}>
          {" "}
          Most Popular News In World{" "}
        </h3>
        {/* search bar here  */}

        <nav>
          <div
            className="nav-wrapper"
            style={{ backgroundColor: "rgb(89 177 222)" }}
          >
            <form>
              <div className="input-field">
                <input
                  id="search"
                  type="search"
                  required
                  placeholder="Type Anything Hit Inter To Search"
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                  value={this.state.searchTerm}
                ></input>
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>

        {/* end search bar  */}
        {console.log(singleCategory)}
        {/* category list here */}

        <div>
          <div
            className="nav-wrapper"
            style={{ backgroundColor: "#f7f7f7", marginTop: 15 }}
            id="category-content-wrapper"
          >
            <div className="col s12">
              {Categorylist &&
                Object.keys(Categorylist).map((category) => {
                  if (singleCategory === Categorylist[category]) {
                    return (
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "#6aadce",
                          margin: 7,
                          color: "black",
                        }}
                      >
                        {`#${Categorylist[category]}`}
                      </button>
                    );
                  } else {
                    return (
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          margin: 7,
                        }}
                      >
                        {`#${Categorylist[category]}`}
                      </button>
                    );
                  }
                })}
            </div>
          </div>
        </div>

        {/* end category list */}

        <div style={{ margin: "15px 0px"}}>
          <div className="row">
            <div className="col s5">
              <small style={{ fontSize: 15 }}>About 3450 result found</small>
            </div>

            <div className="col s2 offset-s5" style={{ float:'right'}}>
              <small style={{ fontSize: 15 }}>1 of 347</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
