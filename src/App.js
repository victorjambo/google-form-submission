import React from 'react';

import Resizer from './components/Resizer';
import Views from './components/Views';
import Toggler from './components/Toggler';
import Header from './components/Header';
import Announcement from './components/Announcement';
import { ThemeProvider } from './context/Theme';
import { ViewProvider } from './context/Views';

const App = () => (
  <ThemeProvider>
    <ViewProvider>
      <Toggler />

      <Header />

      <Announcement />

      <Views />

      <Resizer />
    </ViewProvider>
  </ThemeProvider>
);

export default App;
