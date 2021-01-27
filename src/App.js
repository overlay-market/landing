import React from "react";
import AppDesktop from './AppDesktop';
import AppMobile from './AppMobile';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  //if (!isDesktopOrLaptop) {
  //  return <AppMobile />;
  //}
  return <AppDesktop />;
}

export default App;
