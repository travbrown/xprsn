import React from 'react';
import ReactFilestack from 'filestack-react';
import './../App.css';

function Upload() {

  return (
    <div className="App">
      <header className="App-header">
        <ReactFilestack
          apikey={'AGr0VPFQWRAe5ldcfYSxiz'}
          onSuccess={(res) => console.log(res)}
        />
      </header>
    </div>
  );
}

export default Upload;