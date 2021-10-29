// with-context.hoc.js

import React, {useContext} from 'react';
import {StateContext} from '../state/context.state';

const withContext = Component => props => {
  const context = useContext(StateContext);
  return <Component
    {...context}
    {...props}
  />;
};

export default withContext;