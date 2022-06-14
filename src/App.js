import React from 'react';
import Navigation from './components/Navigation';
import { routes } from './routes';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <Navigation />
      <Homepage />
    </div>
  );
}

export default App;
