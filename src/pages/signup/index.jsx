import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const styles = {
  SignUpContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'skyblue',
    fontFamily: 'Arial, sans-serif',
  },
  FormSignUp: {
    background: 'green',
    width: '420px',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    color: '#fff',
  },
  Title: {
    fontSize: '28px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  InputBox: {
    position: 'relative',
    marginBottom: '20px',
    width: '100%',
  },
  Input: {
    width: '100%',
    padding: '12px 15px',
    paddingRight: '40px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  Icon: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#666',
    fontSize: '20px',
  },
  Button: {
    background: '#4a90e2',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background 0.3s',
    width: '100%',
    marginTop: '20px',
  },
  CheckboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    marginBottom: '20px',
    color: '#fff',
  },
  CheckboxLabel: {
    marginLeft: '8px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  LinkContainer: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#fff',
  },
};

function SignUp() {
  return (
    <div style={styles.SignUpContainer}>
      <form style={styles.FormSignUp}>
        <h1 style={styles.Title}>Créer un Compte Gratuit</h1>

        <div style={styles.InputBox}>
          <input
            type="text"
            style={styles.Input}
            placeholder="Nom d'utilisateur"
            required
          />
          <FaUser style={styles.Icon} />
        </div>

        <div style={styles.InputBox}>
          <input
            type="email"
            style={styles.Input}
            placeholder="Votre email"
            required
          />
          <CiMail style={styles.Icon} />
        </div>

        <div style={styles.InputBox}>
          <input
            type="password"
            style={styles.Input}
            placeholder="Mot de passe"
            required
          />
          <FaLock style={styles.Icon} />
        </div>

        <div style={styles.CheckboxContainer}>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" style={styles.CheckboxLabel}>
            Se souvenir de moi
          </label>
        </div>

        <button type="submit" style={styles.Button}>
          S'inscrire
        </button>

        <div style={styles.LinkContainer}>
          <p>
            Vous avez déjà un compte ?{' '}
            <Link to="/login" style={{ color: '#FFD700' }}>
              Connectez-vous
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
