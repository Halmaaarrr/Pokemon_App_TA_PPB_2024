import React from "react";
import './index.css';

export default function Modal({ data, isShow, onCancel }) {
  if (!isShow) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onCancel}>
          X
        </button>
        <h2>{data.name}</h2>
        <img src={data.sprites.front_default} alt={data.name} />
        <div>
          <h3>Types:</h3>
          {data.types.map((type, index) => (
            <p key={index}>{type.type.name}</p>
          ))}
        </div>
        <div>
          <h3>Abilities:</h3>
          {data.abilities.map((ability, index) => (
            <p key={index}>{ability.ability.name}</p>
          ))}
        </div>
        <div>
          <h3>Stats:</h3>
          {data.stats.map((stat, index) => (
            <p key={index}>
              {stat.stat.name}: {stat.base_stat}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
