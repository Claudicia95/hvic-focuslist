import React from 'react';
import { Link } from 'react-router-dom';

// Styles CSS-in-JS
const styles = {
  DownNav: {
    textAlign: 'center',  // Aligne le texte au centre
    marginTop: '20px',    // Espacement au-dessus du composant
    padding: '10px',      // Ajoute un padding interne pour l'espacement
    backgroundColor: '#f8f9fa',  // Couleur de fond légère
    border: '1px solid #ddd',    // Bordure légère pour un encadrement subtil
  },
  h1Strong: {
    fontSize: '1.5rem',   // Taille de police pour le texte en gras
  },
  p: {
    fontSize: '1rem',      // Taille de police pour le texte simple
    color: '#6c757d',      // Couleur de texte légère
  },
  h3: {
    fontSize: '1rem',      // Taille de police pour les liens
    margin: '10px 10px',  // Espacement horizontal
    padding: '10px 20px', // Padding pour l'intérieur des bordures circulaires
    borderRadius: '50px', // Bordure circulaire
    display: 'inline-block', // Pour afficher les éléments sur la même ligne
    textDecoration: 'none',  // Retire le soulignement
    transition: 'background-color 0.3s', // Animation de transition
    cursor: 'pointer',
  },
  h3Orange: {
    backgroundColor: '#FFA500',  // Bordure orange pour "Créer un Compte Gratuit"
    color: '#fff',                // Texte blanc pour contraste
  },
  h3BlueNight: {
    backgroundColor: '#2C3E50',  // Bordure bleu nuit pour "Essaie Gratuit"
    color: '#fff',                // Texte blanc pour contraste
  },
  h3HoverOrange: {
    backgroundColor: '#FF8C00',  // Changement de couleur pour "Créer un Compte Gratuit"
  },
  h3HoverBlueNight: {
    backgroundColor: '#34495E',  // Changement de couleur pour "Essaie Gratuit"
  },
};

export default function Home() {
  return (
    <div style={styles.DownNav}>
      <h1>
        <strong style={styles.h1Strong}>HVIC-FocusList ||</strong>
        <p style={styles.p}>"Organisez vos tâches, atteignez vos objectifs."</p>
      </h1>
      <Link to="/signup">
        <h3 style={{ ...styles.h3, ...styles.h3Orange }} className="link">
          Créer un Compte Gratuit
        </h3>
      </Link>
      <Link to="/test">
        <h3 style={{ ...styles.h3, ...styles.h3BlueNight }} className="link">
          Essaie Gratuit
        </h3>
      </Link>
    </div>
  );
}
