import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';
import 'bulma/css/bulma.min.css';


function App() {
  const handleButtonClick = () => {
    const storedData = localStorage.getItem('gmail_tr_elements');
    if (storedData) {
      const trArray = JSON.parse(storedData);
      console.log(trArray);
    } else {
      console.log('No data stored in localStorage');
    }
  };

  return (
    <div>
      <Navbar />

      <button onClick={handleButtonClick}>Retrieve and Log Data</button>

      <Content />
      <Footer />
    </div>
  );
}

export default App;