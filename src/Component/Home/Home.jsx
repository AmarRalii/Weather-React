import React, { useState, useEffect } from "react";
import axios from "axios";
import debounce from "lodash/debounce";
import img1 from "../../assets/icon-umberella.png";
import img2 from "../../assets/icon-wind.png";
import img3 from "../../assets/icon-compass.png";
import "./Home.scss";
const API_KEY = "1620e9373be848c3a48145726240501";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("london");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("london");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${debouncedSearchTerm}&days=3`
        );
        setData(response.data);
      } catch (error) {}
    };

    fetchWeather();
  }, [debouncedSearchTerm]);

  const debouncedSearch = debounce((value) => {
    setDebouncedSearchTerm(value);
  }, 500);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <div className="home">
      <div className="container">
        <br />
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            onChange={handleInputChange}
            placeholder=" Find your location ..."
          />
          <input type="submit" />
        </form>

        <br />
        <br />
        {data && (
          <div className="row ">
            <div className="col-md-4">
              <div className="today-nav">
                <p>
                  {new Date(data.location.localtime).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                    }
                  )}
                </p>
                <p>
                  {new Date(data.location.localtime).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
              </div>
              <div className="today-body">
                <div className="city-name">
                  <p>{data.location.name}</p>
                </div>

                <div className="today-degree">
                  <h3>{data.current.temp_c}</h3>
                  <h4>
                    <span>o</span> C
                  </h4>
                </div>
                <div className="today-weather-icon">
                  <img
                    src={data.current.condition.icon}
                    alt={data.current.condition.text}
                  />
                </div>
                <div className="today-condition">
                  <p>{data.current.condition.text}</p>
                </div>
              </div>
              <div className="today-footer">
                <p>
                  <span>
                    <img src={img1} alt="" />
                  </span>{" "}
                  {data.current.humidity}%
                </p>
                <p>
                  <span>
                    <img src={img2} alt="" />
                  </span>{" "}
                  {data.current.wind_kph} km/h
                </p>
                <p>
                  <span>
                    <img src={img3} alt="" />
                  </span>{" "}
                  {data.current.wind_dir}
                </p>
              </div>
            </div>
            {data.forecast.forecastday.slice(1, 3).map((day, index) => (
              <div className={`col-md-${index === 0 ? "3" : "5"}`} key={index}>
                <div className="next-day">
                  <div className="next-day-nav">
                    <p>
                      {new Date(day.date).toLocaleDateString("en-US", {
                        weekday: "long",
                      })}
                    </p>
                  </div>
                  <div className="next-day-body">
                    <div className="next-day-weather-icon">
                      <img
                        src={day.day.condition.icon}
                        alt={day.day.condition.text}
                      />
                    </div>
                    <div className="next-day-degree mx-auto">
                      <h3>{day.day.maxtemp_c}</h3>
                      <h4>
                        <span>o</span>C
                      </h4>
                    </div>
                    <div className="next-day-degree-cli">
                      <p>
                        {day.day.mintemp_c} <span>o</span>
                      </p>
                    </div>
                    <div className="next-day-condition">
                      <h5>{day.day.condition.text}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
