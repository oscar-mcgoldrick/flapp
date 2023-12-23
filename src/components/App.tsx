import React from 'react'
import { Outlet } from "react-router-dom";
import styles from './App.module.scss';
import { GoogleLogin } from '@react-oauth/google';
import { verifyCredentials } from '../api/google';

import Nav from "./Nav";
import Footer from "./Footer";

function App() {

  const handleSuccess = async (creds: string | undefined) => {
    console.log("token= ", creds)
    const payload = await verifyCredentials(creds ? creds : "")
    console.log("verified creds = ", payload)
  }
  return (
    <>
      <div className={styles.app}>
        <Nav />
        <div className={styles.main}>
          <Outlet />
        </div>
        <GoogleLogin onSuccess={(credResponse) => handleSuccess(credResponse.credential)} type='standard' theme='filled_black' shape='pill' />
        <Footer />
      </div>
    </>
  );
}

export default App;
