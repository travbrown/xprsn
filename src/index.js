import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import {SocialMediaIconsReact} from 'social-media-icons-react';



WebFont.load({
  google: {
    families: ['Raleway:700', 'sans-serif']
  }
});
ReactDOM.render(
  <>
    <SocialMediaIconsReact icon="linkedin" url="https://linkedin.com/in/xprsn"/>
    <SocialMediaIconsReact icon="instagram" url="https://instagram.com/_xprsv"/>
    <SocialMediaIconsReact icon="github" url="https://github.com/travbrown"/>
  </>,	
  document.getElementById('root')
);


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
