import React from 'react';
import {Component} from 'react';
import Navigation from '../Navigation/Navigation.js';
import './Gallery.css';

class Gallery extends Component {
  
  constructor(){
    super();
    this.state = {
      Watch: [],
      counts: [0, 0, 0, 0, 0, 0,],
      h2Values: [0, 0, 0, 0, 0, 0],
      img: "https://monochrome-watches.com/wp-content/uploads/2020/11/Audemars-Piguet-Royal-Oak-Double-Balance-Wheel-Openworked-Ceramic-41mm-15416CE.OO_.1225CE.01-review-8.jpg",
    }
  }
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json())
           .then(users =>this.setState({Watch:users}))
    }
    render() {
      if (this.state.Watch.length === 0){
        return(
           <div className="main">
            <div className="pl">
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__dot"></div>
            <div className="pl__text">Loading…</div>
          </div>
        </div>
        );
      } else{
      const {h2Values } = this.state;
      return (
        <div className="Main">
          <Navigation />
          {this.state.counts.map((count, index) => (
            <div className="zone">
            <article
            >
              <img
                src={this.state.img}
                alt="Watch"
              />
              <div className="pa2 ph3-ns">
                <div className="dt w-100 mt2">
                  <div className="dtc">
                  </div>
                  <div className="dtc tr">
                    <h2 className="f5 mv0">${h2Values[index]}</h2>
                  </div>
                </div>
                <p className="f60 lh-copy measure mt2 mid-gray">
                 Luxry Watch And Pretty with Dimonds
                </p>
                <h1 className={count === 0 ? "red" : "green"}>{count}</h1>
                <br />
                <button onClick={() => this.handleIncrement(index)}>Add</button>
                <button onClick={() => this.handleDecrement(index)}>
                  Delete
                </button>
              </div>
            </article>
            </div>
          ))}
        </div>
      );
    }
  }
    handleIncrement = (index) => {
      const counts = [...this.state.counts];
      counts[index] += 1;
      const h2Value = counts[index] * 1000;
      const h2Values = [...this.state.h2Values];
      h2Values[index] = h2Value;
      this.setState({ counts, h2Values });
    };
    
    handleDecrement = (index) => {
      const counts = [...this.state.counts];
      if (counts[index] > 0) {
        counts[index] -= 1;
        const h2Value = counts[index] * 1000;
      const h2Values = [...this.state.h2Values];
      h2Values[index] = h2Value;
      this.setState({ counts, h2Values });
      }
    };

  }
   
  
  
   

export default Gallery;