import React from 'react';
import ReactFilestack from 'filestack-react';
import './../App.css';

function Upload() {

  return (
    <div className="App">
      <header className="App-header">
        <ReactFilestack
          apikey={'AGr0VPFQWRAe5ldcfYSxiz'}
          clientOptions={["image/*","video/*"]}
          componentDisplayMode={{
              type: 'button',
              customText: 'Click here to open picker',
              customClass: 'some-custom-class'
          }}
          
        />
      </header>
    </div>
  );
}

export default Upload;