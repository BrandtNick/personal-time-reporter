// Modules
import React from 'react';
import withAuth from './hocs/with-auth.hoc';

// View
import TimeReports from './views';

// Provider
import {StateContextProvider} from './state/context.state';

const App = () => (
  <StateContextProvider>
    <TimeReports />
  </StateContextProvider>
);

export default withAuth(App);
