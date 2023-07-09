import React from 'react';
import Navigation from "../Navigation/Navigation.js";
import "./Gallery.css";
import Name from "../Name/Name.json";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Watch: [],
      counts: [0,0,0,0,0,0,0,0,0],
      h2Values: [499,1199,699,599,399,449,1499,699,1999],
      img:
        "https://monochrome-watches.com/wp-content/uploads/2020/11/Audemars-Piguet-Royal-Oak-Double-Balance-Wheel-Openworked-Ceramic-41mm-15416CE.OO_.1225CE.01-review-8.jpg",
      searchTerm: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ Watch: users }));
  }
 
  render() {
    const { h2Values, searchTerm } = this.state;
    if (this.state.Watch.length === 0) {
      return (
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
            <div className="pl__text">Loading…</div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5-3.365 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              placeholder="Search"
              type="search"
              className="input"
              value={searchTerm}
              onChange={(event) => {
                this.setState({ searchTerm: event.target.value });
              }}
            />
          </div>
          <Navigation />
          <div className="Main">
            {Name.filter((val) => {
              return val.title.toLowerCase().includes(searchTerm.toLowerCase());
            }).map((val, index) => (
              <div className="zone" key={index}>
                <article>
                  <img src={val.image} alt="Watch" />
                  <div className="pa2 ph3-ns">
                    <h3>{val.title}</h3>
                    <div className="dt w-100 mt2">
                      <div className="dtc"></div>
                      <div className="dtc tr">
                        <h1 className={this.state.counts[index] === 0 ? "black" : "green"}>
                          {this.state.counts[index]}
                        </h1>                       
                        <h2 className="f5 mv0">${h2Values[index]}</h2>
                      </div>
                    </div>
                    <p id="p-gallery" className="f6 lh-copy measure mt2 mid-gray">
                      This is the luxury Watch
                    </p>
                    <button 
                      className="btn-gallery"
                      onClick={() => this.handleIncrement(index)}
                    >
                      Add
                    </button>
                    <button
                      className="btn-gallery"
                      onClick={() => this.handleDecrement(index)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  handleIncrement = (index) => {
    const counts = [...this.state.counts];
    counts[index] += 1;
  
    const h2Values = [...this.state.h2Values];
    const sum = this.state.counts.reduce((a, b) => a + (b > 0 ? 1 : 0), 0);
    h2Values[index] += sum * 1000;
  
    this.setState({ counts, h2Values });
  };
  
  
  handleDecrement = (index) => {
    const counts = [...this.state.counts];
    if (counts[index] > 0) {
      counts[index] -= 1;
      const h2Values = [...this.state.h2Values];
      const sum = counts.reduce((a, b) => a + (b > 0 ? 1 : 0), 0);
      h2Values[index] -= sum * 1000;
      this.setState({ counts, h2Values });
    }
  };
}

export default Gallery;