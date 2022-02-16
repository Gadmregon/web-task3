// src/views/profile.js

import React from 'react';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';


const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <></>
  );
};
export default withAuthenticationRequired(Profile);