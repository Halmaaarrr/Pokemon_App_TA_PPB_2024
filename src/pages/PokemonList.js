import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Untuk navigasi menggunakan React Router
import Card from "../components/card"; // Komponen untuk kartu Pokemon

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(null); // Menyimpan URL berikutnya untuk pagination

  // Fetch data Pokémon
  const fetchPokemonList = async (url) => {
    try {
      const response = await axios.get(url);
      const pokemonData = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const pokemonDetail = await axios.get(pokemon.url);
          return {
            id: pokemonDetail.data.id,
            name: pokemonDetail.data.name,
            image: pokemonDetail.data.sprites.front_default,
            types: pokemonDetail.data.types.map((type) => type.type.name),
            abilities: pokemonDetail.data.abilities.map(
              (ability) => ability.ability.name
            ),
            stats: pokemonDetail.data.stats.map((stat) => ({
              name: stat.stat.name,
              value: stat.base_stat,
            })),
          };
        })
      );
      setPokemonList((prevPokemonList) => [...prevPokemonList, ...pokemonData]);
      setNextUrl(response.data.next); // Menyimpan URL untuk memuat Pokémon berikutnya
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching Pokemon list:", err);
      setIsLoading(false);
    }
  };

  // Menggunakan useEffect untuk memuat data pertama kali
  useEffect(() => {
    fetchPokemonList("https://pokeapi.co/api/v2/pokemon?limit=50"); // Menampilkan 50 Pokémon pertama
  }, []);

  // Fungsi untuk memuat lebih banyak Pokémon saat scroll atau klik tombol "Load More"
  const loadMorePokemon = () => {
    if (nextUrl) {
      fetchPokemonList(nextUrl); // Memuat Pokémon berikutnya
    }
  };

  return (
    <div>
      <h2>Pokemon List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="card-container">
            {pokemonList.map((pokemon) => (
              <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                <Card data={pokemon} />
              </Link>
            ))}
          </div>
          {nextUrl && (
            <button onClick={loadMorePokemon}>Load More</button> // Tombol untuk memuat lebih banyak Pokémon
          )}
        </div>
      )}
    </div>
  );
}
