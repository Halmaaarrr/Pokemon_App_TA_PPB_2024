import React from "react";
import "./About.css"; // Import file CSS untuk About page

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About This App</h2>
        <p>
          Welcome to the <strong>Pokemon Progressive Web App (PWA)</strong>,
          built with <strong>React</strong> and powered by the{" "}
          <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
            PokeAPI
          </a>
          . This app lets you explore a vast collection of Pokémon, view their
          detailed information, and save your favorite Pokémon to a personalized
          list.
        </p>
      </div>
      <div className="about-content">
        <h3>Features:</h3>
        <ul>
          <li>Browse through all available Pokémon.</li>
          <li>View detailed information about each Pokémon (types, abilities, stats).</li>
          <li>Save Pokémon to your favorites list.</li>
          <li>Progressive Web App (PWA) functionality for offline access and faster loading times.</li>
        </ul>
        <h3>Technologies Used:</h3>
        <ul>
          <li><strong>React</strong> for building the user interface.</li>
          <li><strong>Axios</strong> for making API requests.</li>
          <li><strong>PokeAPI</strong> for retrieving Pokémon data.</li>
          <li><strong>React Router</strong> for handling navigation.</li>
          <li><strong>CSS</strong> for styling, with a responsive and futuristic design.</li>
        </ul>
        <h3>Why Progressive Web App?</h3>
        <p>
          A PWA is designed to provide a seamless experience on any device. It
          offers offline capabilities, faster loading, and push notifications, so
          you can enjoy exploring Pokémon even when you're offline or have a
          slow network connection.
        </p>
      </div>
    </div>
  );
}
