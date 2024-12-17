import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import desk from '../../assets/desk.webp';
import flat from '../../assets/flat.jpg'
import topview from '../../assets/topview.jpg'
import lovely from '../../assets/lovely.webp'
import transparent from '../../assets/transparent.jpg'
import '../Home/style.css'

// Styles CSS-in-JS
const styles = {
  homeContainer: {
    backgroundImage: `url(${desk})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    textAlign: 'center',
  },
  h1Strong: {
    fontSize: '2rem',
    color: '#000000',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  p: {
    fontSize: '1.2rem',
    color: '#000000',
    marginTop: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  button: {
    fontSize: '1.1rem',
    padding: '10px 30px',
    borderRadius: '30px',
    textDecoration: 'none',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  orangeButton: {
    backgroundColor: '#FFA500',
  },
  blueButton: {
    backgroundColor: '#2C3E50',
  },
};

export default function Home() {
  // États pour gérer la couleur des boutons
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div>
    <div style={styles.homeContainer}>
      {/* Titre principal */}
      <h1 style={styles.h1Strong}>
        HVIC-FocusList ||
        <p style={styles.p}>"Organisez vos tâches, atteignez vos objectifs."</p>
      </h1>

      {/* Conteneur des boutons */}
      <div style={styles.buttonContainer}>
        <Link
          to="/signup"
          style={{...styles.button,...styles.orangeButton,color: hoveredButton === 'orange' ? '#000000' : '#fff',}}
          onMouseOver={() => setHoveredButton('orange')}
          onMouseOut={() => setHoveredButton(null)}
        >
          Créer un compte Gratuit
        </Link>

        <Link
          to="/test"
          style={{...styles.button,...styles.blueButton,color: hoveredButton === 'blue' ? '#000000' : '#fff', }}
          onMouseOver={() => setHoveredButton('blue')}
          onMouseOut={() => setHoveredButton(null)}
        >
          Essai Gratuit
        </Link>
      </div>
    </div>

    <div className='textContainer'>
     <div id='carousseL'>
      <div className='styleImage'>
        <img style={{height: '90vh',}} src={lovely} alt='todolist' />
        <img style={{height: '90vh',}} src={flat} alt='todolist' />
        <img style={{height: '90vh',}} src={topview} alt='todolist' />
        <img style={{height: '90vh',}} src={transparent} alt='todolist' />
    </div>
      
      </div>
    
    <div className='TexteBox'>
        <h1><strong>Adaptez l'outil à vos besoins</strong></h1>
        <h2><i>HVIC-FocusList est conçue pour s’adapter à tous les profils :</i></h2>

     <p><li><strong>Pour les étudiants :</strong>Planifiez vos révisions, vos cours et vos examens sans stress.</li></p>
     <p><li><strong>Pour les professionnels :</strong>Gérez vos projets, vos rendez-vous et vos deadlines avec précision.</li></p>
     <p><li><strong>Pour les particuliers :</strong>Organisez vos courses, vos rendez-vous et vos activités familiales en un clic.</li></p>
     <p><li><strong>Cette flexibilité fait de HVIC-FocusList l'outil indispensable pour toutes les personnes cherchant à mieux gérer leur temps.</strong></li></p>
    </div>    
    </div>
    </div>
  );
}
