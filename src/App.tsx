import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import AllLocations from './Pages/allLocations';

const theme = {
  fontWeightBold: 700,
  fontWeightSemiBold: 600,
  lightGreyColor: '#001122',
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AllLocations />
    </ThemeProvider>
  );
};

export default App;
