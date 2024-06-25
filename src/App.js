import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Homepage</h1>
        <p>This is a simple homepage created with React.</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Here you can write something about yourself.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>Showcase your projects here.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Provide your contact information here.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Homepage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
