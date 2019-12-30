import React, {useEffect} from 'react';
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import {CONFIG} from '../config';

export default Component => props => {
  useEffect(() => {
    const token = cookie.get('token');
    const decodedToken = token && jwt.decode(token);
    const expirationDate = decodedToken && decodedToken.exp;
    const currentDate = Math.floor(Date.now() / 1000);
    const hasExpired = expirationDate && expirationDate < currentDate;
    const isAuthenticated = !!token && !hasExpired;

    if (!isAuthenticated && CONFIG.env !== 'development') {
      window.location.href = CONFIG.authenticationUrl;
    }
  });
  return <Component {...props} />;
};
