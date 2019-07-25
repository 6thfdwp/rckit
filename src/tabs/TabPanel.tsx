import React, { useState } from 'react';

type TabProps = {
  title: string;
  active?: boolean;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
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
const Tab = {
  Header: TabHeader
};
/**
 * <TabPanel activeIdx={}>
 *   <ul className='tab-bar'>
 *      <Tab></Tab>
 *   </ul>
 *   <TabContent>
 *     <TabItem>
 *   </TabContent>
 * </TabPanel>
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

const TabPanel: React.FC = props => {
  const [state, setState] = useState({ activeTabIdx: 0 });
  const changeTab = (toIdx: number) => {
    setState({ activeTabIdx: toIdx });
    // props.onTabChange();
  };
  // const renderHeader = () => {
  //   props.children && props.children.map(c => {});
  // };
  return (
    <div className="tab-pan">
      <ul className="tab-bar">
        {[1, 2, 3].map((n, i) => {
          return (
            <TabHeader
              key={n}
              active={i == state.activeTabIdx}
              title={`Tab ${n.toString()}`}
              onClick={() => changeTab(i)}
            />
          );
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
};

export default TabPanel;
