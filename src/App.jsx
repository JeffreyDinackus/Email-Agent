import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';
import 'bulma/css/bulma.min.css';
import { useState } from "react";

function App() {

  // 1. Send a message to the service worker requesting the user's data
  function x() {
    chrome.runtime.sendMessage('get-user-data', (response) => {
      // 3. Got an asynchronous response with the data from the service worker
      console.log('received user data', response);
    })
  }

  return (
    <>
      {/* <div style={{ backgroundColor: 'black' }}> */}
      <Navbar />

      <button onClick={x}>Get HTML from Tab</button>

      <Content />
      <Footer />
      {/* </div> */}
    </>
  )
}

export default App
