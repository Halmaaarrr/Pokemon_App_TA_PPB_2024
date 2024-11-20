import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`/pokemon-detail/${data.id}`} className="card">
      <img src={data.image} alt={data.name} className="card-image" />
      <h3 className="card-title">{data.name}</h3>
    </Link>
  );
};

export default Card;
