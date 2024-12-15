import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import '../Navbar/styles.css'

// Composant pour chaque lien de navigation
const NavItem = ({ to, children }) => {
  const linkStyle = {
    textDecoration: 'none', // Retire le soulignement des liens
    color: '#007bff', // Couleur par défaut des liens
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s', // Animation de couleur fluide
  };

  const linkHoverStyle = {
    color: '#0056b3', // Couleur des liens au survol
  };

  return (
    <li>
      <Link
        to={to}
        style={linkStyle}
        onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)} // Applique la couleur au survol
        onMouseOut={(e) => (e.target.style.color = linkStyle.color)} // Réinitialise la couleur
      >
        {children}
      </Link>
    </li>
  );
};

function Navbar() {
  const containerStyle = {
    display: 'flex', // Utilisation du flexbox
    justifyContent: 'space-between', // Répartit les éléments sur la ligne
    alignItems: 'flex-start', // Aligne les éléments en haut
    padding: '10px 20px', // Ajoute un espacement interne
    backgroundColor: '#f8f9fa', // Couleur de fond de la barre
   // borderBottom: '2px solid #ddd', // Bordure inférieure légère
    height: '100px', // Hauteur fixe de la barre de navigation
  };

  const logoStyle = {
    height: '80px', // Hauteur du logo
    width: '100px', // Largeur du logo
    marginTop: '10px', // Espacement du haut pour le logo
    cursor: 'pointer',
  };

  const navListStyle = {
    listStyleType: 'none', // Supprime les puces des listes
    display: 'flex', // Affiche les éléments en ligne
    gap: '20px', // Espacement entre les éléments
    margin: 0, // Retire la marge par défaut
    padding: 0, // Retire le padding par défaut
    marginTop: '10px', // Ajuste l'espacement en haut
  };

  return (
    <>
    <div style={containerStyle}>
      {/* Logo positionné à gauche */}
      <img src={logo} alt="HVIC-FocusList" style={logoStyle} />

      {/* Liste de navigation positionnée à droite */}
      <ul style={navListStyle}>
        <NavItem to="/"><h3>Accueil</h3></NavItem>
        <NavItem to="/about"><h3>Aide</h3></NavItem>
        <NavItem to="/test"><h3>Essaie Gratuit</h3></NavItem>
        <NavItem to="/login"><h3>Se connecter</h3></NavItem>
        <NavItem to="/signup"><h3>Créer un Compte Gratuit</h3></NavItem>
      </ul>
    </div>
    
    </>
  );
}

export default Navbar;
