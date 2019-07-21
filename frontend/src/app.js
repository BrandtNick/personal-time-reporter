// Modules
import React from 'react';

// View
import TimeReports from './views';

// Provider
import {StateContextProvider} from './state/context.state';

const App = () => (
  <StateContextProvider>
    <TimeReports />
  </StateContextProvider>
);

export default App;
