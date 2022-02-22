import axios from "axios";
import { useState, useEffect } from "react";   
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Beers() {

const [beers, setBeers] = useState([]);    

  useEffect(() => {
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    })
    .catch((error)=>console.log(error))
  }, []);     

  return (
    <div>
      <Header />
      <div className="all-beers-container">
        {beers.map((beer) => (
          <div
            className="beer-card"
            key="beer._id"
            style={{ borderBottom: "2px solid rgb(212, 212, 212)" }}
          >
            >
            <Link
              to={`/beers/${beer._id}`} style={{
                textDecoration: "none",
                borderBottom: "3px solid rgb(212, 212, 212)",
              }}
            >
              <div className="beer-img-container">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div>
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Beers;