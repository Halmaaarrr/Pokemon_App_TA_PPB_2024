import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Untuk mengambil parameter dari URL
import axios from "axios"; // Pastikan axios sudah diimport
import "./PokemonDetail.css"; // Pastikan file CSS diimpor dengan benar

export default function PokemonDetail() {
  const { id } = useParams(); // Mengambil ID dari URL
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        // Mengambil detail Pokémon berdasarkan ID dari URL
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        // Menyusun data untuk ditampilkan
        const data = {
          name: response.data.name,
          image: response.data.sprites.front_default,
          height: response.data.height,
          weight: response.data.weight,
          types: response.data.types.map((type) => type.type.name),
          abilities: response.data.abilities.map(
            (ability) => ability.ability.name
          ),
          stats: response.data.stats.map((stat) => ({
            name: stat.stat.name,
            value: stat.base_stat,
          })),
        };

        // Menyimpan data yang sudah disusun ke state
        setPokemon(data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching Pokemon detail:", err);
        setIsLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [id]); // Menjalankan efek setiap kali ID berubah

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        pokemon && (
          <div className="pokemon-detail-container">
            {/* Bagian gambar Pokémon */}
            <div className="pokemon-image">
              <img src={pokemon.image} alt={pokemon.name} />
            </div>

            {/* Bagian detail Pokémon */}
            <div className="pokemon-detail">
              <h2>{pokemon.name}</h2>

              <h3>Types</h3>
              <ul>
                {pokemon.types.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>

              <h3>Abilities</h3>
              <ul>
                {pokemon.abilities.map((ability, index) => (
                  <li key={index}>{ability}</li>
                ))}
              </ul>

              <h3>Stats</h3>
              <ul>
                {pokemon.stats.map((stat) => (
                  <li key={stat.name}>
                    {stat.name}: {stat.value}
                  </li>
                ))}
              </ul>

              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
