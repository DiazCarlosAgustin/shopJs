import React from 'react';
import './Styles/app.css'
import Menu from './componentes/menu/Menu'
function App() {
  return (
    <div className="container mx-auto">
      <header>
        <Menu />
      </header>
    </div>
  );
}

export default App;
