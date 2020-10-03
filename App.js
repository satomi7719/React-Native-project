import 'react-native-gesture-handler';
import React from 'react';
import {Drawer} from 'native-base';
import Navigation from './src/navigation';
import * as NavigationService from './src/navigation/NavigationService';

import Header from './src/components/Header';
import SideBar from './src/components/SideBar';
global.drawer = null;

const App = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const closeDrawer = () => {
    if (global.drawer != null) {
      global.drawer._root.close();
      setIsDrawerOpen(false);
    }
  };

  const openDrawer = () => {
    if (global.drawer != null) global.drawer._root.open();
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <React.Fragment>
      <Drawer
        ref={(ref) => {
          global.drawer = ref;
        }}
        type={'overlay'}
        panThreshold={0.3}
        content={
          <SideBar
            {...props}
            navigation={NavigationService}
            closeDrawer={closeDrawer}
          />
        }
        onClose={() => closeDrawer()}>
        <Header
          openDrawer={openDrawer}
          {...props}
          isDrawerOpen={isDrawerOpen}
        />
        <Navigation />
      </Drawer>
    </React.Fragment>
  );
};

export default App;
