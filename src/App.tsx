import React from 'react';
import logo from './logo.svg';
import './App.css';

import TabPanel_ from './tabs/TabPanel_';

const App = () => {
  return (
    <div className="App">
      <TabPanel_ activeTabIdx={0} />
    </div>
  );
};

export default App;
