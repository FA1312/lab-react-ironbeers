import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function BeerDetails() {
    const params = useParams();
    const [beer, setBeer] = useState([]);
    

    useEffect(() => {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
        .then((response) => {
          console.log("response.data", response.data);
          setBeer(response.data);
        })
        .catch((error)=>console.log(error))
    }, [params.id]);

    return (
        <>
        <Header/>
        <div className="beer-card">
            <img src={beer.image_url} alt={beer.name} />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
      </>
    );    
}

export default BeerDetails;