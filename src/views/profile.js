// src/views/profile.js
import React from "react";

import {withAuthenticationRequired} from '@auth0/auth0-react';
import User from "../components/user";

const Profile = () => {
  return(<>
  TollBar
  User
  UserTable
  <User/>
  
  </>

  )};



export default withAuthenticationRequired(Profile);
