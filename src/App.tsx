import React from 'react';
import './App.css';
import MarkdownRender from '@nteract/markdown';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MarkdownRender source="test **test***content*" />
        <MarkdownRender source="test **test** *content*" />
      </header>
    </div>
  );
}

export default App;
