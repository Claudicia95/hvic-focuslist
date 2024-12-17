import React from 'react';
import { Link } from 'react-router-dom';
import transparent from '../../assets/transparent.jpg'

function Footer() {
  return (
    <div style={footerStyles.container}>
      {/* Conteneur des liens */}
      <div style={footerStyles.linksContainer}>
        {/* Section Contact */}
        <div style={footerStyles.contact}>
          <Link to="/contact" style={footerStyles.link}>Contact</Link>
          <div style={footerStyles.infoText}>+229 01 96 96 96 96</div>
          <div style={footerStyles.infoText}>hvic-focuslist@todo.com</div>
        </div>

        {/* Section Services */}
        <div style={footerStyles.services}>
          <Link to="/services" style={footerStyles.link}>Nos services</Link>
          <div style={footerStyles.infoText}>Développement web</div>
        </div>

        {/* Section Navigation */}
        <div style={footerStyles.navigation}>
          <Link to="/navigation" style={footerStyles.link}>Navigations</Link>
        </div>
      </div>

      {/* Section Copyright */}
      <div style={footerStyles.copyright}>
        <div>Copyright © 2024</div>
        <div>HVIC-FocusList</div>
      </div>
    </div>
  );
}

export default Footer;

// Styles CSS-in-JS
const footerStyles = {
  // Conteneur principal du footer
  container: {
    backgroundImage:`url(${transparent})` ,
    color: '#FFF', // Texte blanc
    padding: '20px 0',
    fontFamily: 'Arial, sans-serif',
    animation: 'fadeIn 1s ease-out forwards',
  },

  // Conteneur des liens principaux
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '10px 0',
  },

  // Styles pour les sous-sections
  contact: {
    textAlign: 'center',
    animation: 'slideInLeft 1s ease-out',
  },
  services: {
    textAlign: 'center',
    animation: 'slideInUp 1s ease-out',
  },
  navigation: {
    textAlign: 'center',
    animation: 'slideInRight 1s ease-out',
  },

  // Style des liens
  link: {
    color: '#FFDD57', // Jaune doré
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'transform 0.3s, color 0.3s',
  },

  infoText: {
    marginTop: '5px',
    fontSize: '0.9rem',
    color: '#D3D3D3',
  },

  // Texte Copyright
  copyright: {
    textAlign: 'center',
    fontSize: '0.8rem',
    borderTop: '1px solid #444',
    paddingTop: '10px',
    marginTop: '20px',
    animation: 'fadeIn 2s ease-out',
  },
};
