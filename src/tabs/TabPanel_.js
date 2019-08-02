// @ts-nocheck

import React, { useState } from 'react';

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

export function Tab({ children }) {
  return <div className="tab-content">{children}</div>;
}

/* <TabPanel activeIdx={}>
 *   <Tab active title={} headerComp={}>
 *      <Content />
 *   </Tab>
 *   <Tab title={}>
 *      <Content />
 *   </Tab>
 * </TabPanel>
 */
export default function TabPanel_({ activeTabIdx, children }) {
  const [state, setState] = useState({ activeTabIdx });
  const changeTab = toIdx => {
    console.log(`select tab`);
    setState({ activeTabIdx: toIdx });
    // props.onTabChange();
  };
  let selTab = null;
  children.forEach((tab, i) => {
    if (i === state.activeTabIdx) {
      selTab = tab;
    }
  });
  return (
    <div className="tab-pan">
      <ul className="tab-bar">
        {children.map((tab, i) => {
          // console.log(tab.props);
          const { title } = tab.props;
          return (
            <TabHeader
              key={i}
              title={title}
              active={i === state.activeTabIdx}
              onClick={() => changeTab(i)}
            />
          );
        })}
      </ul>
      {selTab}
    </div>
  );
}
