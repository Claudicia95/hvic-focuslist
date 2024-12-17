import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';

// Composant pour chaque lien
const NavItem = ({ to, children, customStyle }) => {
  const baseStyle = {
    textDecoration: 'none',
    color: '#000',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  };

  return (
    <li>
      <Link
        to={to}
        style={{ ...baseStyle, ...customStyle }}
        onMouseOver={(e) => (e.target.style.color = '#0056b3')}
        onMouseOut={(e) => (e.target.style.color = baseStyle.color)}
      >
        {children}
      </Link>
    </li>
  );
};

function Navbar() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f8f9fa',
  };

  const navGroupStyle = {
    display: 'flex',
    gap: '20px',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };

  return (
    <div style={containerStyle}>
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="HVIC-FocusList" style={{ height: '50px' }} />
      </Link>

      {/* Navigation principale */}
      <ul style={navGroupStyle}>
        <NavItem to="/" customStyle={{ fontSize: '1.2rem' }}>Accueil</NavItem>

        <NavItem to="/about" customStyle={{ fontSize: '1.2rem' }}>Aide</NavItem>

        <NavItem to="/userpro" customStyle={{backgroundColor:'red', fontSize: '1.3rem', color:'back',
                                              borderRadius:'30px',
                                              padding: '9px 20px'
                                            }}>Pro</NavItem>
        
        <NavItem to="/test" customStyle={{backgroundColor: '#2C3E50',borderRadius: '30px',
                                          fontSize: '1.1rem',
                                          color: 'white',
                                          padding: '8px 20px',}}> Essai Gratuit</NavItem>
      </ul>

      {/* Navigation secondaire */}
      <ul style={navGroupStyle}>
        <NavItem to="/login">Se connecter</NavItem>

        <NavItem to="/signup" customStyle={{ backgroundColor: '#FFA500',borderRadius: '30px',fontSize: '1.1rem',
            color: 'white',
            padding: '8px 20px',
          }}
        >
          Créer un Compte Gratuit
        </NavItem>
      </ul>
    </div>
  );
}

export default Navbar;
