import React, { useState, ReactChild, ReactNode } from 'react';
import { type } from 'os';

type TabProps = {
  title: string;
  active?: boolean;
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
};
type TabPanProps = {
  activeTabIdx: number;
  children: Array<ReactNode>;
};
type TabPanState = {
  activeTabIdx: number;
};

const TabHeader: React.FC<TabProps> = ({ title, active, onClick }) => {
  let cls = ['tab'];
  if (active) {
    cls.push('tab-active');
  }
  // const cls = active ? `tab-active` : `tab`;
  return (
    <li className={cls.join(' ')} onClick={onClick}>
      {title}
    </li>
  );
};

/**
 *
 * <TabPanel activeIdx={}>
 *   <Tab active title={} headerComp={}>
 *      <Content />
 *   </Tab>
 *   <Tab title={}>
 *      <Content />
 *   </Tab>
 * </TabPanel>
 */

const TabPanel: React.FC<TabPanProps> = ({ activeTabIdx, children }) => {
  const [state, setState] = useState({ activeTabIdx });
  const changeTab = (toIdx: number) => {
    setState({ activeTabIdx: toIdx });
    // props.onTabChange();
  };
  let selTab = null;
  // children.forEach((tab, i) => {
  //   if (i === state.activeTabIdx) {
  //     selTab = tab.props.children;
  //   }
  // });
  return (
    <div className="tab-pan">
      <ul className="tab-bar">
        {children.map((tab, i) => {
          // const { title } = tab.props;
          // return (
          //   <TabHeader
          //     key={i}
          //     title={title}
          //     active={i === state.activeTabIdx}
          //     onClick={() => changeTab(i)}
          //   />
          // );
        })}
      </ul>
      {selTab}
    </div>
  );
};

export default TabPanel;
