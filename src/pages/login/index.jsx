import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

const styles = {
  LoginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #87CEEB, #4682B4)', // Dégradé bleu
    fontFamily: 'Arial, sans-serif',
  },
  FormLogin: {
    position: 'relative',
    background: '#2E8B57', // Vert pour le formulaire
    width: '400px',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)', // Ombre subtile
    color: '#fff',
  },
  LoginBoxContainer: {
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    marginBottom: '20px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  InputBox: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '15px 0',
    padding: '10px',
    borderRadius: '5px',
    background: '#fff', // Blanc pour les champs de saisie
    color: '#333', // Texte sombre
    fontSize: '16px',
    border: 'none',
    outline: 'none',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)', // Effet en relief
  },
  InputIcon: {
    marginLeft: '10px',
    color: '#555', // Couleur de l'icône
  },
  CheckboxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    marginTop: '10px',
    color: '#fff',
  },
  Button: {
    width: '100%',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    background: 'orange', // Bouton orange
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '20px',
  },
  ButtonHover: {
    background: 'darkorange',
  },
  RegisterLink: {
    marginTop: '20px',
    color: '#FFD700', // Lien en or
    textDecoration: 'none',
    fontSize: '14px',
    display: 'block',
    transition: 'color 0.3s ease',
  },
  RegisterLinkHover: {
    color: '#FF4500', // Orange vif au survol
  },
};

function Login() {
  return (
    <div style={styles.LoginContainer}>
      <form style={styles.FormLogin} action="/">
        <div style={styles.LoginBoxContainer}>
          <h1 style={styles.title}>Se connecter</h1>

          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <input
              style={styles.InputBox}
              type="text"
              placeholder="Nom d'utilisateur"
              required
            />
            <FaUser style={{ ...styles.InputIcon, position: 'absolute', right: '10px', top: '10px' }} />
          </div>

          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <input
              style={styles.InputBox}
              type="password"
              placeholder="Mot de passe"
              required
            />
            <FaLock style={{ ...styles.InputIcon, position: 'absolute', right: '10px', top: '10px' }} />
          </div>

          <div style={styles.CheckboxContainer}>
            <label>
              <input type="checkbox" /> Se souvenir de moi
            </label>
            <Link to="/forgot-password" style={{ color: '#FFD700' }}>
              Mot de passe oublié?
            </Link>
          </div>

          <button
            type="submit"
            style={styles.Button}
            onMouseOver={(e) => (e.target.style.background = styles.ButtonHover.background)}
            onMouseOut={(e) => (e.target.style.background = styles.Button.background)}
          >
            Connexion
          </button>

          <p>
            Vous n'avez pas de compte ?{' '}
            <Link
              to="/signup"
              style={styles.RegisterLink}
              onMouseOver={(e) => (e.target.style.color = styles.RegisterLinkHover.color)}
              onMouseOut={(e) => (e.target.style.color = styles.RegisterLink.color)}
            >
              Créer un compte gratuit
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
