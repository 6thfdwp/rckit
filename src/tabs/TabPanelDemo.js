import React from 'react';

import logo from '../logo.svg';
import TabPanel_, { Tab } from './TabPanel_';

const Tab1Content = () => {
  return (
    <>
      <h1>Tab 1 content</h1>
      <p>
        as a careful housewife runs to catch One of her feather'd creatures broke away, Sets down
        her babe, and makes all swift dispatch In pursuit of the thing she would have stay; Whilst
        her neglected child holds her in chase, Cries to catch her whose busy care is bent To follow
        that which flies before her face, Not prizing her poor infant's discontent; So runn'st thou
        after that which flies from thee, Whilst I thy babe chase thee afar behind;
      </p>
    </>
  );
};
const Tab2Content = () => {
  return (
    <ul>
      <li>todo 1</li>
      <li>todo 2</li>
    </ul>
  );
};
const Tab3Content = () => {
  return (
    <div style={{ display: 'flex' }}>
      <img className="App-logo" src={logo} />
      <h4>Nice Logo</h4>
    </div>
  );
};
export default function TabPanelDemo(props) {
  return (
    <TabPanel_ activeTabIdx={2}>
      <Tab title="Tab 1">
        <Tab1Content />
      </Tab>
      <Tab title="Tab 2">
        <Tab2Content />
      </Tab>
      <Tab title="Tab 3">
        <Tab3Content />
      </Tab>
    </TabPanel_>
  );
}
