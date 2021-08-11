import React, { Component, useState } from 'react';
import { AiFillLinkedin, AiFillMail, AiFillPhone, AiOutlineDribbble } from "react-icons/ai";
import "./App.css"
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import "./Navbar.css"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  
  
  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return (
        <div>Loading....</div>
      );
    }
    // sorting alphabetically
    function asc() {
      items.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    }

    function desc() {
      items.sort((a,b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0));
    }
    return (
      <div className="App">
        <div className="navbar">
            <div className="left">
                
            </div>
            <input type="text" placeholder="Search.."/>
            <button onClick={asc}>
                <AiOutlineSortAscending size="24px" color="black"/>
            </button>
            <button onClick={desc}>
                <AiOutlineSortDescending size="24px" color="black"/>
            </button>
        </div>
        <div className="container">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <h1>{item.name}</h1>
                <p className="username">AKA: {item.username}</p>
                <p>{item.company.name}</p>
                <a href={'https://'+item.website} target="_blank">
                  <AiOutlineDribbble size="36px" color="black"/>
                </a>
                <a href="https://www.linkedin.com/in/cmilagan/" target="_blank">
                  <AiFillLinkedin size="36px" color="black"/>
                </a>
                <a href={'mailto:' + item.email} target="_blank">
                  <AiFillMail size="36px" color="black"/>
                </a>
                <p className="phone"><AiFillPhone size="24px" color="black"/> {item.phone}</p>
              </li>
            ))};
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
