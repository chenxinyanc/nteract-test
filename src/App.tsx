import React from 'react';
import './App.css';
import MarkdownRender from '@nteract/markdown';

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ border: "1px solid red" }}>
        <MarkdownRender source={"test\n```ts\ncode fence\n```"} />
      </div>
    </div>
  );
}

export default App;
