import React from 'react';
import './NavBar.css';
const NavBar:React.FC = () => {
    return (
      <header className="App-header border-b-2 border-gray-500 p-2">
        <div className="container mx-auto">
          <a href="/" className="font-semibold text-2xl">Movie<span className="text-blue-300">Sourcer</span></a>
          <div>

          </div>
        </div>
      </header>
    );
}

export default NavBar;
