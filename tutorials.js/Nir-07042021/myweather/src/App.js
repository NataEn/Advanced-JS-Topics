import DaysWeather from "./components/DaysWeather/DaysWeather";
import Header from "./components/Header/Header";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: null,
      weather: {
        day: "mon",
        forecast: [
          { description: "sunny", temp: "24" },
          { description: "cloudy", temp: "14" },
          { description: "rainy", temp: "4" },
        ],
      },
    };
  }

  componentDidMount() {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?lat=32.107&lon=34.943&appid=53902859aba5c758228ecb4012459883&lang=he"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const items = this.state.items;
    return (
      <div>
        <h3>my weather app</h3>
        <div className="container">
          {this.state.items && (
            <Header
              items={this.state.items}
              description2={items.weather[0].description}
              icon={items.weather[0].icon}
              description={"some description"}
              temp={"33"}
            />
          )}
          {this.state.isLoaded && <DaysWeather weather={this.state.weather} />}
        </div>
      </div>
    );
  }
}
