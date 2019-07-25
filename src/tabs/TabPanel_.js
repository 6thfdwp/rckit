import React, { useState } from 'react';
import { statement } from '@babel/template';

const TabHeader = ({ title, active, onClick }) => {
  let cls = ['tab'];
  if (active) {
    cls.push('tab-active');
  }
  return (
    <li className={cls.join(' ')} onClick={onClick}>
      {title}
    </li>
  );
};
const TabContent = ({ children }) => {};

export default function TabPanel_({ activeTabIdx, children }) {
  const [state, setState] = useState({ activeTabIdx: 0 });
  const changeTab = toIdx => {
    setState({ activeTabIdx: toIdx });
    // props.onTabChange();
  };
  return (
    <div className="tab-pan">
      <ul className="tab-bar">
        {children.map((tab, i) => {
          const { title } = tab.props;
          <TabHeader title={title} active={i == state.activeTabIdx} />;
        })}
      </ul>
      <div className="tab-content tab-content_active">
        <h2>Tab Content</h2>
      </div>
      <div className="tab-content tab-content_active">
        <h2>Tab Content</h2>
      </div>
      <div className="tab-content tab-content_active">
        <h2>Tab Content</h2>
      </div>
    </div>
  );
}
