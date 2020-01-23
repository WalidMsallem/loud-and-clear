import React from 'react';

import './customizedTabs.scss'
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';


function getTabs({tabMenu}) {
  return tabMenu.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index,
    tabClassName: 'tab',
    panelClassName: 'panel',
    transformWidth:300,
  }));
}

const CustomizedTabs = ({tabMenu}) => <Tabs className='customized-tabs' items={getTabs({tabMenu})} />

export default CustomizedTabs;


