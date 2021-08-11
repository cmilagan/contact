import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { AiFillLinkedin, AiFillMail, AiFillPhone, AiOutlineDribbble } from "react-icons/ai";
import "./App.css"
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai";
import "./Navbar.css"

function App() {

  const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
                setItems(res.data)
            })
            .catch(err => {
                console.log(err)   
            })

    }, [])
  
    return (
      <div className="App">
        <div className="navbar">
            <div className="left">
                
            </div>
            <input type="text" placeholder="Search.."/>
            <button>
                <AiOutlineSortAscending size="24px" color="black"/>
            </button>
            <button>
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

export default App