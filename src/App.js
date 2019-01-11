import React, { Component } from 'react';
import DgLogo from './images/glogo_data.png';
import ApplicationCard from './AppCard.js';
import { applications } from './applications.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <img className="logo" src={DgLogo} />
          </div>
          <div className="title"><h1>GBDX Product Suite</h1></div>
        </header>
        <div className="grid-container">
          {
            applications.map( application => {
              return (
                <ApplicationCard 
                  svg={application.svg}              
                  title={application.title}
                  copy={application.copy}
									link={application.link}
                />   
              )
            }) 
          }
        </div>
      </div>
    );
  }
}

export default App;
