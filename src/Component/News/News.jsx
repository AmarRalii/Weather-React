import React, { useEffect, useState } from "react";
import { getHelthData } from "../../useData";
import './News.css';
import img from '../../assets/banner.png';
import Loading from './../Loading/Loading';

export default function Test() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHelthData()
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="news">
      <div className="container">
        <div className="row g-4">
          {data.map((item, index) => (
            <div className="col-md-3" key={index}>
              <img src={item.image_url ? item.image_url : img} alt={item.title || "Health News"} />
              <h4>{item.title ? item.title.split(' ').slice(0, 4).join(' ') : "No Title"}</h4>
              <p>{item.description ? item.description.split(' ').slice(0, 5).join(' ') : "No Description"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
