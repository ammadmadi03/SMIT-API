import React from 'react';

const SignUp = () => {
  return (
    <div style={styles.container}>
      <h2>Sign Up</h2>
      <form>
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input type="email" style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input type="password" style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label>Confirm Password:</label>
          <input type="password" style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      <p style={styles.linkText}>
        Already have an account? <a href="/signin" style={styles.link}>Sign In</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  linkText: {
    marginTop: '15px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default SignUp;
