import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";
import Modal from "../components/modal";
import './LandingPage.css'; // Import the updated CSS file

export default function LandingPage() {
  const [data, setData] = useState(null);
  const [isLoaded, setisLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("Ditto"); // Default Pokemon is Ditto
  // Modal States
  const [modalShow, setModalShow] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    const fetchData = async (query) => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (response.status === 200) {
          setData(response.data);
          setisLoaded(true);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    if (!isLoaded) {
      fetchData(query);
    }
  }, [isLoaded, query]);

  const onSearch = (e) => {
    if (e.key === "Enter") {
      setisLoaded(false);
      setQuery(e.target.value);
    }
  };

  const handleClick = (item) => {
    setModalShow(!modalShow);
    setModalItem(item);
  };

  return (
    <div className="landing-page">
      <div className="intro">
        <h2>Pokemon Search</h2>
        <p>Find your favorite Pokémon and discover more about them!</p>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Pokémon by name"
          onKeyDown={(e) => onSearch(e)}
          className="search-input"
        />
        <h3 className="title">Search Results for: {query}</h3>
      </div>

      {!data || isLoading ? (
        <p className="loader">Loading...</p>
      ) : (
        <div className="card-container">
          <Card data={data} onClick={() => handleClick(data)} />
        </div>
      )}

      <Modal
        data={modalItem}
        isShow={modalShow}
        onCancel={() => setModalShow(false)}
      />

      {/* Section for additional information */}
      <div className="info-section">
        <h2>Did You Know?</h2>
        <p>
          Pokémon, short for "Pocket Monsters", originated in Japan and has
          become one of the most successful franchises in history. The series
          was created by Satoshi Tajiri and is known for its iconic gameplay of
          capturing and battling creatures.
        </p>
        <p>
          As of today, there are over 800 unique Pokémon spanning multiple
          generations. Each Pokémon has unique abilities, types, and
          characteristics, making the adventure of discovering them truly
          timeless.
        </p>
        <p>
          Want to learn more? Keep exploring to find detailed information about
          each Pokémon in the database!
        </p>
      </div>
    </div>
  );
}
